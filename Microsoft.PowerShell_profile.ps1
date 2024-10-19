# Codes by Mahdi Tasha
# Firstly clone the repo 
# Then add this to your `Microsoft.PowerShell_profile.ps1`
function ChatGPT {
  param (
    [string]$prompt
  )
    
  # Define the path to the project directory
  $projectPath = "<PATH_TO_PROJECT>"

  try {
    # Navigate to the project directory and execute npm
    Push-Location -Path $projectPath
    npm start $prompt
  } catch {
    Write-Error "An error occurred while starting npm: $_"
  } finally {
    Pop-Location
  }
}
