# Pack dist/ for Timeweb upload (without branding extras).
$dist = Join-Path $PSScriptRoot '..\dist'
$out = Join-Path $PSScriptRoot '..\site-upload.zip'

if (-not (Test-Path $dist)) {
  Write-Error 'Run npm run build first.'
  exit 1
}

$items = Get-ChildItem -Path $dist -Force | Where-Object {
  $_.Name -ne 'branding'
}

if (Test-Path $out) { Remove-Item $out -Force }
Compress-Archive -Path ($items.FullName) -DestinationPath $out -CompressionLevel Optimal -Force

Write-Host "Created $out"
Write-Host ("Size MB: {0:N2}" -f ((Get-Item $out).Length / 1MB))
