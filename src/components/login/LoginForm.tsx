'use client';

import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useLogin from '@/hooks/useLogin';
import PasswordField from '@/components/login/PasswordField';

const LoginForm = () => {
  const { form, onSubmit, isLoading } = useLogin();

  return (
    <CardContent className="px-0 mb-40 sm:mb-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>EMAIL</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <PasswordField />
          <Button type="submit" size="expanded" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Log In'}
          </Button>
        </form>
      </Form>
    </CardContent>
  );
};

export default LoginForm;
