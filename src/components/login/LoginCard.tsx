'use client';

import { Card } from '@/components/ui/card';
import {LoginHeader} from '@/components/login/LoginHeader';
import { LoginForm } from '@/components/login/LoginForm';
import {LoginFooter} from '@/components/login/LoginFooter';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export const LoginCard = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-secondary">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card
          className={cn(
            'w-[380px] sm:w-[600px] lg:w-[380px] px-[31px] py-[39px] gap-0',
          )}
        >
          <LoginHeader />
          <LoginForm />
          <LoginFooter />
        </Card>
      </motion.div>
    </div>
  );
};
