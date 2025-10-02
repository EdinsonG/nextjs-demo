'use client';

import Link from 'next/link';
import type { InferType } from 'yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// Internal Imports
import useLoadingStore from '@/store/loadingStore';
import { InputText, InputPass } from '@/components';
import { loginSchema } from '@/utils/validation/schemas';

type LoginFormData = InferType<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const t = useTranslations();
  const { setLoading } = useLoadingStore();

  const { control, handleSubmit, formState: { isValid } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async () => {
    setLoading(true);
    setTimeout(() => { 
      setLoading(false);
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <>
      <Typography variant="h4" mb={3} textAlign="center">{t('login.title')}</Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <InputText name="email" control={control} label={t('form.email')} icon={<MailOutlineIcon />}/>
        <InputPass name="password" control={control} label={t('form.password')} />

        <Button variant="contained" type="submit" fullWidth disabled={!isValid}>
          {t('login.title')}
        </Button>

        <Box justifyContent="center" alignItems="center" width={'100%'} display={'flex'} >
          <Typography variant="body1" color="text.secondary" mr={1}>
           {t('login.forgotPassword1')}
          </Typography>
          <Typography variant="body1"  component={Link} href="/recover-password" sx={{ textDecoration: "none", color: "primary.main" }}>
            {t('login.forgotPassword2')}
          </Typography>
        </Box>

        <Box justifyContent="center" alignItems="center" width={'100%'} display={'flex'} >
          <Typography variant="body1" color="text.secondary" mr={1}>
           {t('login.signup1')}
          </Typography>
          <Typography variant="body1" component={Link} href="/signup" sx={{ textDecoration: "none", color: "primary.main" }}>
            {t('login.signup2')}
          </Typography>
        </Box>
      </Box>

    </>
  );
}
