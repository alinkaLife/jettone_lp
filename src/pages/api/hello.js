import schema from '@/services/validation'
import { sendEmail } from '@/services/sendGrid'

export default async function handler(req, res) {
    const body = JSON.parse(req.body)
    try {
        await schema.validate(body, { abortEarly: false })

        const date = new Date()
        const html = `
      <p><b>Никнейм</b></p>
      <p>${body.nickName}</p>
      <p><b>telegram</b></p>
      <p>${body.telegram}</p>
      <p><b>Источник</b></p>
      <p>${body.source}</p>
      <p><b>Почта</b></p>
      <p>${body.email}</p>
    `
        await sendEmail(
            process.env.ADMIN_EMAIL,
            `Новая заявка с сайта - ${date.toString()}`,
            html
        )
        res.status(200).json({ message: 'Email successfully sent' })
    } catch (error) {
        console.log('🚀 ~ file: hello.js:14 ~ handler ~ error:', error)
        res.status(403).json(error.errors)
    }
}
