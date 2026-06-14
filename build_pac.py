def generate_pac():
    # Твой домен Hugging Face (замени proxy-config на реальное имя твоего спейса, если оно другое)
    PROXY_HOST = "ilyapg-Http-proxy-for-Rus.hf.space" 
    PORT = "443"
    
    pac_content = f"""function FindProxyForURL(url, host) {{
    // 1. Локальный трафик напрямую
    if (isPlainHostName(host) || shExpMatch(host, "127.0.0.1") || host == "localhost") {{
        return "DIRECT";
    }}

    // 2. Рунет и СНГ соцсети напрямую
    if (shExpMatch(host, "*.ru") || 
        shExpMatch(host, "*.рф") || 
        shExpMatch(host, "*.vk.com") || 
        shExpMatch(host, "*.ok.ru") || 
        shExpMatch(host, "*yandex*") || 
        shExpMatch(host, "*mail.ru")) {{
        return "DIRECT";
    }}

    // 3. Всё остальное гоним во VLESS через Hugging Face
    return "PROXY {PROXY_HOST}:{PORT}; DIRECT";
}}"""
    
    with open("proxy.pac", "w", encoding="utf-8") as f:
        f.write(pac_content)
    print("PAC-файл под новый VLESS успешно сгенерирован!")

if __name__ == "__main__":
    generate_pac()
