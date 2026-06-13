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
    return "PROXY 84.47.150.125:1080; PROXY 161.49.100.131:1080; PROXY 190.128.228.182:80; DIRECT";
}