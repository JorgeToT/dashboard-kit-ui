import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

import Logo from '@/images/logo.svg';

export const LoginHeader = () => {
  return (
    <CardHeader className="gap-8 mb-12">
      <CardTitle>
        <div className="flex items-center justify-center mb-3">
          <Image src={Logo} alt="Dashboard Kit Logo" width={48} height={48} />
        </div>
        <h1 className="text-[19px] font-bold text-secondary-foreground pb-[5px]">
          Dashboard Kit
        </h1>
      </CardTitle>
      <CardDescription>
        <h2 className="text-[24px]/7.5 font-bold text-foreground mb-3">
          Log In to Dashboard Kit
        </h2>
        <p className="text-[12px]/5 font-normal text-secondary-foreground">
          Enter your email and password
        </p>
      </CardDescription>
    </CardHeader>
  );
};
