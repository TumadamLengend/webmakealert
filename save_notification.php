<?php
header('Content-Type: application/json');

if (!isset($_POST['icon']) || !isset($_POST['title']) || !isset($_POST['description']) || !isset($_POST['buttons'])) {
    echo json_encode(['error' => 'Thiếu dữ liệu cần thiết.']);
    exit;
}

function decode_base64($str) {
    return urldecode(html_entity_decode(base64_decode($str)));
}

$icon = decode_base64($_POST['icon']);
$title = decode_base64($_POST['title']);
$description = decode_base64($_POST['description']);
$buttons = json_decode($_POST['buttons'], true);

$fakeDownloadLink = 'https://example.com/downloads/yourfile.dylib';

echo json_encode([
    'token' => uniqid(),
    'downloadLink' => $fakeDownloadLink
]);
exit;
?>
