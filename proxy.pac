function FindProxyForURL(url, host) {
    // 1. Локальные адреса напрямую
    if (isPlainHostName(host) || shExpMatch(host, "192.168.*") || host == "localhost") {
        return "DIRECT";
    }

    // 2. Рунет напрямую
    if (shExpMatch(host, "*.ru") || shExpMatch(host, "*.рф")) {
        return "DIRECT";
    }

    // 3. Всё остальное пускаем через собранные рабочие прокси
    return "PROXY 104.143.226.223:5826; PROXY 213.184.149.74:1080; PROXY 143.42.66.91:80; DIRECT";
}