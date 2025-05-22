'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Logo from '@/images/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  email: z.string().email().min(1).max(50),
  password: z.string().min(8).max(50),
});

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    setTimeout(() => {
      console.log(values);
      setIsLoading(false);
      router.push('/dashboard');
    }, 2000);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className={cn('max-w-[380px] px-8 py-10')}>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-center">
              <Image src={Logo} alt="Dashboard Kit Logo" />
            </div>
            <h1 className="text-2xl font-bold">Dashboard Kit</h1>
          </CardTitle>
          <CardDescription>
            <h2>Log In to Dashboard Kit</h2>
            <p>Enter your email and password</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EMAIL</FormLabel>
                    <FormControl>
                      <Input placeholder="Email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel>PASSWORD</FormLabel>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-primary"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 px-3 text-sm text-gray-600"
                        >
                          {showPassword ? 'Hide' : 'Show'}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="expanded" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p>
            Don’t have an account?{' '}
            <Link href="/sign-up" className="text-primary">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
