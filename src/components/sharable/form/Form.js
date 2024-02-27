import React, { useState } from 'react'
import Input from '../../sharable/input/input'
import Button from '../../sharable/button/button'
import styles from './Form.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'next-i18next'
import schema from '@/services/validation'

const defaultValues = {
    nickName: '',
    source: '',
    telegram: '',
    email: '',
}

const Form = ({ onFormSubmit }) => {
    const { t } = useTranslation()
    const [isLoading, setisLoading] = useState(false)
    const [serverErrors, setServerErrors] = useState()
    const [isSuccess, setIsSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    })

    const onSubmit = async (formData) => {
        try {
            const body = JSON.stringify(formData)
            setisLoading(true)
            // const res = await fetch('https://promoapi.0000.team/partners/application', { method: 'POST', body })


            const res = await fetch('https://promoapi.jetton.partners/partners/applications', { method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
                ,

                body })

            if (res.status === 403) {
                setServerErrors(await res.json())
            }

            if (res.status === 200) {
                setIsSuccess(true)
                setTimeout(() => {
                    setIsSuccess(false)
                    onFormSubmit && onFormSubmit()
                    reset(defaultValues)
                }, 2000)
            }
        } catch (error) {
            // setServerErrors(error)
        } finally {
            setisLoading(false)
        }
    }

    if (isSuccess) {
        return (
            <h2
                style={{
                    marginTop: '30px',
                    textAlign: 'center',
                    fontSize: '22px',
                }}
            >
                Заявка успешно создана
            </h2>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input}>
                <Input
                    name={'nickName'}
                    register={register}
                    placeholder={t('form.item1')}
                    errors={errors}
                />
                <Input
                    name={'telegram'}
                    register={register}
                    placeholder={t('form.item2')}
                    errors={errors}
                />
                <Input
                    name={'source'}
                    register={register}
                    placeholder={t('form.item3')}
                    errors={errors}
                />
                <Input
                    name={'email'}
                    register={register}
                    placeholder={t('form.item4')}
                    errors={errors}
                />
            </div>
            <Button className={styles.btn} isLoading={isLoading}>
                {t('form.send')}
            </Button>
            {serverErrors && (
                <ul style={{ marginTop: '20px' }}>
                    {serverErrors.map((el, i) => (
                        <li
                            key={`form-error-${i}`}
                            style={{
                                color: 'red',
                                textAlign: 'center',
                            }}
                        >
                            {el}
                        </li>
                    ))}
                </ul>
            )}
        </form>
    )
}

export default Form
