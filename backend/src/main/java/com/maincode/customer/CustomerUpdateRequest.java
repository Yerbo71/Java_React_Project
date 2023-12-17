package com.maincode.customer;

public record CustomerUpdateRequest(
        String name,
        String email,
        Integer age
) {
}
