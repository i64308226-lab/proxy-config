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
    return "PROXY 12.50.107.217:80; PROXY 41.220.16.218:80; PROXY 198.46.241.139:6674; DIRECT";
}