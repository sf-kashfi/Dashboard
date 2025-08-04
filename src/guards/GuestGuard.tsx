import type { ReactNode } from 'react';

type GuestGuardProps = {
    children: ReactNode;
};

const GuestGuard = ({ children }: GuestGuardProps) => {
    return <>{children}</>;
};

export default GuestGuard;
