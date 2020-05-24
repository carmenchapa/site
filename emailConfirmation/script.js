function confirmEmail() {
  console.log("confirmEmail")

  const stitchClient = stitch.Stitch.initializeDefaultAppClient("ms-kxrqk")

  // Stitch.initializeDefaultAppClient("ms-kxrqk")
  // Parse the URL query parameters
  const url = window.location.search
  const params = new URLSearchParams(url)
  const token = params.get("token")
  const tokenId = params.get("tokenId")

  console.log("params", token, tokenId)

  // Confirm the user's email/password account
  const emailPassClient = stitchClient.auth.getProviderClient(
    stitch.UserPasswordAuthProviderClient.factory
  )

  return emailPassClient.confirmUser(token, tokenId)
}

window.onload = confirmEmail
