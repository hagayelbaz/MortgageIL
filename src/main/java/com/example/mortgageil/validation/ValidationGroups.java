package com.example.mortgageil.validation;

import jakarta.validation.GroupSequence;
import jakarta.validation.groups.Default;

public class ValidationGroups {
    public interface StandardRegistration {}
    public interface OAuthRegistration {}

    @GroupSequence({ Default.class, StandardRegistration.class })
    public interface StandardRegistrationSequence {}

    @GroupSequence({ Default.class, OAuthRegistration.class })
    public interface OAuthRegistrationSequence {}
}