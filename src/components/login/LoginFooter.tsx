import { CardFooter } from '@/components/ui/card';
import Link from 'next/link';

const LoginFooter = () => {
  return (
    <CardFooter>
      <div className="flex gap-[5px]">
        <p className="text-sm text-secondary-foreground font-normal tracking-[0.3px]">
          Don’t have an account?
        </p>
        <Link
          href="/sign-up"
          className="text-primary text-sm font-semibold tracking-[0.2px]"
        >
          Sign up
        </Link>
      </div>
    </CardFooter>
  );
};

export default LoginFooter;
