package com.maincode.auth;

public record AuthenticationRequest(
        String username,
        String password
) {
}
