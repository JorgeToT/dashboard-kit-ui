'use client';

import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useLogin from '@/hooks/useLogin';
import PasswordField from '@/components/login/PasswordField';
import { motion } from 'motion/react';

export const LoginForm = () => {
  const { form, onSubmit, isLoading } = useLogin();
  return (
    <CardContent className="px-0 mb-40 sm:mb-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }} >
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
          </motion.div>
          <PasswordField />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" size="expanded" disabled={isLoading}>
              {isLoading ? (
                <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} >
                  Loading...
                </motion.span>
              ) : (
                'Log In'
              )}
            </Button>
          </motion.div>
        </form>
      </Form>
    </CardContent>
  );
};
