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
    return "PROXY 162.240.76.92:80; PROXY 155.50.242.81:3128; PROXY 49.254.32.54:8001; DIRECT";
}