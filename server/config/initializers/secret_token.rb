# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Server::Application.config.secret_key_base = '1408bafba5d764f89c312508da96ec996dc62979937f2a0cff67f54c9bd8424ecc358d74b14b0c2f3a437e87ac873f20bfacc49d24bac8a2eeba99ff9a30e2aa'
