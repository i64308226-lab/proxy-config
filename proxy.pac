function FindProxyForURL(url, host) {
    // 1. Рунет напрямую
    if (shExpMatch(host, "*.ru") || 
        shExpMatch(host, "*.рф") || 
        shExpMatch(host, "*.vk.com") || 
        shExpMatch(host, "*.ok.ru") || 
        shExpMatch(host, "*yandex*") || 
        shExpMatch(host, "*mail.ru")) {
        return "DIRECT";
    }

    // 2. Все остальные имбовые зарубежные сайты гоним через Hugging Face VLESS-мост
    return "PROXY ilyapg-Http-proxy-for-Rus.hf.space:443; DIRECT";
}