function FindProxyForURL(url, host) {
    // 1. Локальный трафик напрямую
    if (isPlainHostName(host) || shExpMatch(host, "127.0.0.1") || host == "localhost") {
        return "DIRECT";
    }

    // 2. Рунет и СНГ соцсети напрямую
    if (shExpMatch(host, "*.ru") || 
        shExpMatch(host, "*.рф") || 
        shExpMatch(host, "*.vk.com") || 
        shExpMatch(host, "*.ok.ru") || 
        shExpMatch(host, "*yandex*") || 
        shExpMatch(host, "*mail.ru")) {
        return "DIRECT";
    }

    // 3. Всё остальное гоним во VLESS через Hugging Face
    return "PROXY ilyapg-Http-proxy-for-Rus.hf.space:443; DIRECT";
}