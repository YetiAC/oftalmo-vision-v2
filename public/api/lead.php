<?php
// Recibe los formularios del sitio (sendBeacon) y manda una copia por correo,
// para que ningún lead se pierda aunque la persona no envíe el WhatsApp.
// PENDIENTE: confirmar el correo destino con la clínica.

const DESTINO = 'info@oftalmo.vision';
const REMITENTE = 'web@oftalmo.vision';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }

$raw = file_get_contents('php://input', false, null, 0, 8000);
$data = json_decode($raw, true);
if (!is_array($data) || empty($data['formulario'])) { http_response_code(400); exit; }

// Límite simple: un envío cada 20 s por IP.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'x';
$lock = sys_get_temp_dir() . '/ov_lead_' . md5($ip);
if (file_exists($lock) && time() - filemtime($lock) < 20) { http_response_code(429); exit; }
touch($lock);

$limpio = function ($v) { return trim(str_replace(["\r", "\n"], ' ', strip_tags((string) $v))); };
$lineas = [];
foreach ($data as $k => $v) { $lineas[] = $limpio($k) . ': ' . mb_substr($limpio($v), 0, 500); }

$asunto = 'Nuevo lead web · ' . mb_substr($limpio($data['formulario']), 0, 80);
$cuerpo = "Llegó un formulario desde oftalmo.vision.\nLa persona también abrió WhatsApp con estos datos.\n\n" . implode("\n", $lineas) . "\n\nFecha: " . date('Y-m-d H:i');
$cabeceras = 'From: Oftalmo Vision Web <' . REMITENTE . ">\r\nContent-Type: text/plain; charset=UTF-8";

@mail(DESTINO, '=?UTF-8?B?' . base64_encode($asunto) . '?=', $cuerpo, $cabeceras);
http_response_code(204);
