import {z} from 'zod';

export const RegistrationSchema = z.object({

    first_name: z.string().trim()
        .min(1, { message: 'First name is required'} )
        .max(50, { message: 'First name cannot exceed 50 characters in length' })
        .regex(/^[a-zA-Z\s'-]+$/, { message: 'First name can only contain letters, spaces, hypens, and apostrophes' })
        .transform((name) => name.replace(/\s+/g, ' '))
        .transform((name) => name.charAt(0).toUpperCase() + name.slice(1))
        .refine((name) => name.trim().length > 0, { message: 'First name cannot be just whitespace' }),

    last_name: z.string().trim()
        .min(1, { message: 'First name is required'} )
        .max(50, { message: 'First name cannot exceed 50 characters in length' })
        .regex(/^[a-zA-Z\s'-]+$/, { message: 'First name can only contain letters, spaces, hypens, and apostrophes' })
        .transform((name) => name.replace(/\s+/g, ' '))
        .transform((name) => name.charAt(0).toUpperCase() + name.slice(1))
        .refine((name) => name.trim().length > 0, { message: 'First name cannot be just whitespace' }),
    
    username: z.string().trim()
        .min(1, { message: 'Username required' })
        .max(50, { message: 'Username cannot exceed 50 characters in length' })
        .regex(/^[a-zA-Z][a-zA-Z0-9-_]{0,49}$/, { message: 'Username must start with a letter and can only contain letters, numbers, hypens, and underscores' })
        .refine((name) => name.trim().length > 0, { message: 'Username cannot be just whitespace' }),

    email: z.string().trim()
        .min(1, { message: 'Email address is required' })
        .max(255, { message: 'Email address cannot exceed 50 characters in length' })
        .email({ message: 'Invalid email address' }),

    password: z.string().trim()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&_-]{8,}$/, { message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character and be at least 8 characters long' })
        .min(8, { message: 'Password must be at least charracters long' })
        .max(64, { message: 'Password cannot exceed 64 characters in length' }),

    confirm_password: z.string().trim()
        .max(64, { message: 'Confirm password cannot exceed 64 characters in length' }),
    

}).refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
});


export type RegistrationSchema = z.infer<typeof RegistrationSchema>;