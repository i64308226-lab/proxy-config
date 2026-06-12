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
    return "PROXY 160.19.19.9:8080; PROXY 138.91.159.185:80; PROXY 184.174.46.137:5766; DIRECT";
}