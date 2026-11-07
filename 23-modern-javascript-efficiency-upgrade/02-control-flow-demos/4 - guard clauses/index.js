const user = { name: 'Cyle', isAdmin: true, userLevel: 200 };

function updateAppSettings(user, settings) {

    if (!user ||
        !user.isAdmin ||
        !user.userLevel ||
        user.userLevel < 255
    ) {
        return;
    }

    // apply settings
}

updateAppSettings(user, {});