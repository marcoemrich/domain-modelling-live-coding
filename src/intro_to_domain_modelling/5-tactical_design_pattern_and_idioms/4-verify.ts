// Tactical Design Pattern and idioms

// Model State Changes explicitly!

import { Option } from "ts-option";

/* Bad Idea */
{
  type Email = {
    email: string;
    verified: boolean;
  };
}

/* Better */

type Brand<K, T> = K & { __brand: T };

type UnverifiedEmail = Brand<string, "UnverifiedEmail">;
type VerifiedEmail = Brand<string, "VerifiedEmail">;

type Email = UnverifiedEmail | VerifiedEmail;

type verifyEmail = (e: Email) => Option<VerifiedEmail>;
