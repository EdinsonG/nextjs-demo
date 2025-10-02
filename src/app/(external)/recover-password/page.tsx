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
import useMessageStore from '@/store/messagesStore';
import { InputText, InputPass } from '@/components';
import { recoverPasswordSchema } from '@/utils/validation/schemas';

type RecoverPasswordFormData = InferType<typeof recoverPasswordSchema>;

export default function RecoverPasswordPage() {
  const t = useTranslations();
  const router = useRouter();
  const { setLoading } = useLoadingStore();
  const { setSuccess } = useMessageStore();

  const { control, handleSubmit, formState: { isValid } } = useForm<RecoverPasswordFormData>({
    resolver: yupResolver(recoverPasswordSchema),
    mode: 'onTouched',
    defaultValues: { email: '', newPassword: '', confirmPassword: '' },
  });

  const onSubmit = async () => {
    setLoading(true);
    setTimeout(() => { 
      setSuccess({ title: t('recoverPassword.titleModalSucces'), description: t('recoverPassword.titleModalDescriptionSucces') });
      setLoading(false);
      router.push('/login');
    }, 2000);
  };

  return (
    <>
      <Typography variant="h4" mb={3} textAlign="center">{t('recoverPassword.title')}</Typography>
      
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <InputText name="email" control={control} label={t('form.email')} type="email" icon={<MailOutlineIcon />} />
        <InputPass name="newPassword" control={control} label={t('form.newPassword')} />
        <InputPass name="confirmPassword" control={control} label={t('form.confirmPassword')} />

        <Button variant="contained" type="submit" fullWidth disabled={!isValid}>
          {t('recoverPassword.changePassword')}
        </Button>
      </Box>
      <Box justifyContent="center" alignItems="center" width={'100%'} display={'flex'} mt={4}>
        <Typography variant="body1" component={Link} href="/login" sx={{ textDecoration: "none", color: "primary.main" }}>
          {t('recoverPassword.backLink')}
        </Typography>
      </Box>

      <Box justifyContent="center" alignItems="center" width={'100%'} display={'flex'} mt={2}>
        <Typography variant="body1" color="text.secondary" mr={1}>
          {t('login.signup1')}
        </Typography>
        <Typography variant="body1" component={Link} href="/signup" sx={{ textDecoration: "none", color: "primary.main" }} >
          {t('login.signup2')}
        </Typography>
      </Box>  
    </>
  );
}