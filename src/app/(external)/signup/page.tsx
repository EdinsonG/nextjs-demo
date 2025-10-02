'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// Internal
import useLoadingStore from '@/store/loadingStore';
import useMessageStore from '@/store/messagesStore';
import { InputText, InputPass, InputSelect, InputCheck, InputRadio } from '@/components';
import { signupSchema } from '@/utils/validation/schemas';

export default function SignUpPage() {
  const router = useRouter();
  const t = useTranslations();
  const { setLoading } = useLoadingStore();
  const { setSuccess } = useMessageStore();

  const { control, handleSubmit, formState: { isValid } } = useForm({
    resolver: yupResolver(signupSchema),
    mode: 'onTouched',
    defaultValues: {
      names: '',
      email: '',
      phone: '',
      newPassword: '',
      terms: false
    },
  });

  const onSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      setSuccess({ title: t('signup.titleModalSucces'), description: t('signup.titleModalDescriptionSucces') });
      setLoading(false);
      router.push('/login');
    }, 2000);
  };

  return (
    <>
      <Typography variant="h4" mb={3} textAlign="center">{t('signup.title')}</Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <InputText name="names" control={control} label={t('form.names')} icon={<PersonOutlineIcon />}/>
        <InputText name="email" control={control} label={t('form.email')}  icon={<MailOutlineIcon />}/>
        <InputText name="phone" control={control} label={t('form.phoneNumber')}  icon={<SmartphoneIcon />}/>
        <InputPass name="newPassword" control={control} label={t('form.password')}  />
        <InputCheck name="terms" control={control} label={t('form.terms')} />
        <Button variant="contained" type="submit" fullWidth disabled={!isValid}>
          {t('buttons.save')}
        </Button>
      </Box>

      <Box justifyContent="center" alignItems="center" width={'100%'} display={'flex'} mt={4}>
        <Typography variant="body1" color="text.secondary" mr={1}>
          {t('signup.login1')}
        </Typography>
        <Typography variant="body1" component={Link} href="/login" sx={{ textDecoration: "none", color: "primary.main" }} >
          {t('signup.login2')}
        </Typography>
      </Box>
    </>
  );
}