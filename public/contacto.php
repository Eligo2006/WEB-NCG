<?php
header("Content-Type: application/json");

$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Filtro anti-spam invisible
if (!empty($data['telefono_secundario'])) {
    http_response_code(400);
    echo json_encode(["error" => "Spam"]);
    exit;
}

$nombre = isset($data['nombre']) ? $data['nombre'] : 'Cliente';
$email = isset($data['email']) ? $data['email'] : 'No especificado';
$asunto = isset($data['asunto']) ? $data['asunto'] : 'Sin asunto';
$mensaje = isset($data['mensaje']) ? $data['mensaje'] : '';

$to = "info@ncgsac.com";
$subject = "NUEVO CONTACTO: $asunto - NCG Servicios";

$htmlContent = "
    <div style='font-family: Arial, sans-serif; padding: 20px; color: #333;'>
      <h2 style='color: #ea580c;'>Nuevo mensaje desde la web</h2>
      <table style='width: 100%; border-collapse: collapse; margin-top: 15px;'>
        <tr><td style='padding: 10px; border-bottom: 1px solid #eee;'><strong>Cliente:</strong></td><td style='padding: 10px; border-bottom: 1px solid #eee;'>$nombre</td></tr>
        <tr><td style='padding: 10px; border-bottom: 1px solid #eee;'><strong>Email:</strong></td><td style='padding: 10px; border-bottom: 1px solid #eee;'>$email</td></tr>
        <tr><td style='padding: 10px; border-bottom: 1px solid #eee;'><strong>Asunto:</strong></td><td style='padding: 10px; border-bottom: 1px solid #eee;'>$asunto</td></tr>
      </table>
      <div style='margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #ea580c;'>
        <p style='margin: 0; white-space: pre-wrap;'>$mensaje</p>
      </div>
    </div>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $nombre <info@ncgsac.com>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

if(mail($to, $subject, $htmlContent, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error de servidor"]);
}
?>