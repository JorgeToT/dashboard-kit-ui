import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email().min(1).max(50),
  password: z.string().min(8).max(50),
});

const useLogin = () => {
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    // Simulate an API call
    setTimeout(() => {
      console.log(values);
      setIsLoading(false);
      router.push('/dashboard');
    }, 2000);
  };

  return {
    form,
    isLoading,
    showPassword,
    setShowPassword,
    onSubmit,
  };
};

export default useLogin;
