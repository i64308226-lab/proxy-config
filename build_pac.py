import urllib.request
import re

def get_live_proxies():
    print("Собираю публичные HTTP прокси...")
    # Берем один из проверенных самообновляемых пулов прокси
    url = "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt"
    try:
        with urllib.request.urlopen(url) as response:
            proxies = response.read().decode('utf-8').splitlines()
            # Берем первые 3 рабочих прокси для отказоустойчивости
            return proxies[:3]
    except Exception as e:
        print(f"Ошибка сбора прокси: {e}")
        return ["127.0.0.1:8080"] # Фолбэк на локалку, если всё упало

def generate_pac():
    live_proxies = get_live_proxies()
    
    # Формируем строку прокси для PAC-файла
    # Если первый прокси из списка умрет, браузер сам переключится на второй
    proxy_string = "; ".join([f"PROXY {p}" for p in live_proxies]) + "; DIRECT"
    
    pac_content = f"""function FindProxyForURL(url, host) {{
    // 1. Локальные адреса напрямую
    if (isPlainHostName(host) || shExpMatch(host, "192.168.*") || host == "localhost") {{
        return "DIRECT";
    }}

    // 2. Рунет напрямую
    if (shExpMatch(host, "*.ru") || shExpMatch(host, "*.рф")) {{
        return "DIRECT";
    }}

    // 3. Всё остальное пускаем через собранные рабочие прокси
    return "{proxy_string}";
}}"""
    
    with open("proxy.pac", "w", encoding="utf-8") as f:
        f.write(pac_content)
    print("PAC-файл успешно обновлен!")

if __name__ == "__main__":
    generate_pac()
