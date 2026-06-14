def generate_pac():
    # Адрес твоего созданного прокси-сервера на Hugging Face
    # Порт для входящих HTTP-подключений снаружи обычно мапится на 80 или 443
    PROXY_HOST = "ilyapg-Http-proxy-for-Rus.hf.space" 
    PORT = "443"
    
    pac_content = f"""function FindProxyForURL(url, host) {{
    // 1. Рунет напрямую
    if (shExpMatch(host, "*.ru") || 
        shExpMatch(host, "*.рф") || 
        shExpMatch(host, "*.vk.com") || 
        shExpMatch(host, "*.ok.ru") || 
        shExpMatch(host, "*yandex*") || 
        shExpMatch(host, "*mail.ru")) {{
        return "DIRECT";
    }}

    // 2. Все остальные имбовые зарубежные сайты гоним через Hugging Face VLESS-мост
    return "PROXY {PROXY_HOST}:{PORT}; DIRECT";
}}"""
    
    with open("proxy.pac", "w", encoding="utf-8") as f:
        f.write(pac_content)
    print("PAC-файл для облачного VLESS успешно обновлен!")

if __name__ == "__main__":
    generate_pac()
