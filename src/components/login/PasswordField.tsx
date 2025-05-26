import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import useLogin from '@/hooks/useLogin';

export default function PasswordField() {
  const { showPassword, setShowPassword } = useLogin();
  return (
    <FormField
      name="password"
      render={({ field }) => (
        <FormItem>
          <div className="flex justify-between items-center">
            <FormLabel>PASSWORD</FormLabel>
            <Link
              href="/reset-password"
              className="text-[10px] font-normal text-secondary-foreground"
            >
              Forgot password?
            </Link>
          </div>
          <FormControl className="relative">
            <Input
              {...field}
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              icon={
                <Button
                  type="button"
                  variant="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-1 right-2 flex items-center"
                >
                  {showPassword ? (
                    <EyeOffIcon size={20} color="#9FA2B4" />
                  ) : (
                    <EyeIcon size={20} color="#9FA2B4" />
                  )}
                </Button>
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
