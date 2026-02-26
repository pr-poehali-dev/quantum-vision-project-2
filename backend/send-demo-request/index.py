import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Принимает заявку на демо с сайта MetalRisk AI и отправляет письмо на почту владельца."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    company = body.get('company', '').strip()
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip()
    comment = body.get('comment', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    to_email = os.environ['CONTACT_EMAIL']

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; padding: 32px; border-radius: 8px; border: 1px solid #dc2626;">
        <h2 style="color: #dc2626; font-size: 22px; margin-bottom: 24px;">🏭 Новая заявка на демо — MetalRisk AI</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #9ca3af; width: 140px;">Имя</td><td style="padding: 8px 0; color: #fff; font-weight: bold;">{name}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Компания</td><td style="padding: 8px 0; color: #fff;">{company or '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Телефон</td><td style="padding: 8px 0; color: #fff;">{phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Email</td><td style="padding: 8px 0; color: #fff;">{email or '—'}</td></tr>
            {"<tr><td style='padding: 8px 0; color: #9ca3af; vertical-align: top;'>Комментарий</td><td style='padding: 8px 0; color: #fff;'>" + comment + "</td></tr>" if comment else ""}
        </table>
        <p style="margin-top: 32px; color: #6b7280; font-size: 12px;">Заявка получена с сайта MetalRisk AI</p>
    </div>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Заявка на демо: {name} — {company or "без компании"}'
    msg['From'] = to_email
    msg['To'] = to_email
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP('smtp.mail.ru', 587) as server:
        server.starttls()
        server.login(to_email, os.environ['MAIL_PASSWORD'])
        server.sendmail(to_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
