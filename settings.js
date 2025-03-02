const fs = require('fs');
const path = require('path');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// دالة متقدمة للتحويل إلى Boolean مع معالجة الأخطاء
function advancedBoolConverter(text, fault = 'true') {
    if (typeof text === 'boolean') return text;
    const cleanText = String(text).trim().toLowerCase();
    return cleanText === fault.toLowerCase();
}

// نظام التحديث التلقائي
const AUTO_UPDATE = {
    ENABLED: advancedBoolConverter(process.env.AUTO_UPDATE || "true"),
    GIT_REPO: process.env.GIT_REPO || "https://github.com/yourusername/yourrepo.git",
    UPDATE_BRANCH: process.env.UPDATE_BRANCH || "main",
    UPDATE_INTERVAL: process.env.UPDATE_INTERVAL || "24" // بالساعات
};

// نظام الأمان المتقدم
const SECURITY = {
    ANTI_SPAM: advancedBoolConverter(process.env.ANTI_SPAM || "true"),
    MAX_COMMAND_RATE: process.env.MAX_COMMAND_RATE || "5/10s", // 5 أوامر كل 10 ثواني
    BLOCKED_COUNTRIES: (process.env.BLOCKED_COUNTRIES || "").split(','),
    ENCRYPTION_LEVEL: process.env.ENCRYPTION_LEVEL || "AES-256-GCM",
    FIREWALL: {
        ENABLED: advancedBoolConverter(process.env.FIREWALL || "true"),
        ALLOWED_IPS: (process.env.ALLOWED_IPS || "127.0.0.1").split(',')
    }
};

// تكاملات مع واجهات برمجة التطبيقات الخارجية
const API_INTEGRATIONS = {
    OPENAI: {
        ENABLED: advancedBoolConverter(process.env.OPENAI_ENABLED || "false"),
        API_KEY: process.env.OPENAI_API_KEY || "",
        MODEL: process.env.OPENAI_MODEL || "gpt-4-1106-preview",
        MAX_TOKENS: process.env.MAX_TOKENS || 1500
    },
    WEATHER: {
        ENABLED: advancedBoolConverter(process.env.WEATHER_ENABLED || "false"),
        API_KEY: process.env.WEATHER_API_KEY || "",
        PROVIDER: process.env.WEATHER_PROVIDER || "openweathermap"
    }
};

// نظام القواعد المتقدم
const ADVANCED_POLICIES = {
    AUTO_PURGE: {
        ENABLED: advancedBoolConverter(process.env.AUTO_PURGE || "false"),
        INTERVAL: process.env.PURGE_INTERVAL || "1d",
        KEEP_LOGS: advancedBoolConverter(process.env.KEEP_LOGS || "true")
    },
    DATA_RETENTION: {
        BACKUP_INTERVAL: process.env.BACKUP_INTERVAL || "7d",
        MAX_BACKUPS: process.env.MAX_BACKUPS || 30
    }
};

// نظام التحليلات والرصد
const ANALYTICS = {
    ENABLED: advancedBoolConverter(process.env.ANALYTICS || "true"),
    TRACK: {
        COMMANDS: advancedBoolConverter(process.env.TRACK_COMMANDS || "true"),
        ERRORS: advancedBoolConverter(process.env.TRACK_ERRORS || "true"),
        PERFORMANCE: advancedBoolConverter(process.env.TRACK_PERFORMANCE || "true")
    },
    LOG_LEVEL: process.env.LOG_LEVEL || "info" // debug, info, warn, error
};

module.exports = {
    // الإعدادات الأساسية المطورة
    SESSION_CONFIG: {
        ID: process.env.SESSION_ID || "MALVIN-XD~59oF1TgS#iPFd6-PBdeyPAz_GTHi3NfZFFlrF8qF2foIzy7gE9R4",
        ENCRYPTION_KEY: process.env.ENCRYPTION_KEY || "32CHAR_LONG_SECRET_KEY",
        SESSION_TYPE: process.env.SESSION_TYPE || "multi-device"
    },

    // نظام الأوامر المتقدم
    COMMAND_SYSTEM: {
        PREFIX: process.env.PREFIX || ".", 
        DYNAMIC_PREFIX: advancedBoolConverter(process.env.DYNAMIC_PREFIX || "false"),
        DISABLED_COMMANDS: (process.env.DISABLED_COMMANDS || "").split(','),
        COMMAND_COOLDOWN: process.env.COMMAND_COOLDOWN || "3000", // بالمللي ثانية
        USER_LEVELS: {
            ADMIN: process.env.ADMIN_LEVEL || "owner,admin",
            PREMIUM: process.env.PREMIUM_LEVEL || "premium,vip"
        }
    },

    // المظهر والتخصيص المتقدم
    UI_CUSTOMIZATION: {
        THEME: {
            NAME: process.env.THEME_NAME || "dark-matrix",
            CUSTOM_CSS: process.env.CUSTOM_CSS || ""
        },
        INTERACTIVE_MENUS: advancedBoolConverter(process.env.INTERACTIVE_MENUS || "true"),
        EMOJI_PACK: process.env.EMOJI_PACK || "fluent-3d"
    },

    // إعدادات الأداء
    PERFORMANCE: {
        CACHE_ENABLED: advancedBoolConverter(process.env.CACHE_ENABLED || "true"),
        MAX_CACHE_SIZE: process.env.MAX_CACHE_SIZE || "500MB",
        RESOURCE_LIMITS: {
            CPU: process.env.CPU_LIMIT || "90%",
            MEMORY: process.env.MEMORY_LIMIT || "512MB"
        }
    },

    // نظام الإشعارات
    NOTIFICATIONS: {
        ERROR_REPORTS: process.env.ERROR_REPORTS || "owner,admin",
        STATUS_ALERTS: advancedBoolConverter(process.env.STATUS_ALERTS || "true"),
        BACKUP_ALERTS: advancedBoolConverter(process.env.BACKUP_ALERTS || "true")
    },

    // ميزات الذكاء الاصطناعي
    AI_FEATURES: {
        NLP: {
            ENABLED: advancedBoolConverter(process.env.NLP_ENABLED || "false"),
            LANGUAGE: process.env.NLP_LANGUAGE || "ar,en",
            MODEL: process.env.NLP_MODEL || "bert-base-multilingual"
        },
        VOICE_ASSISTANT: {
            ENABLED: advancedBoolConverter(process.env.VOICE_ASSISTANT || "false"),
            WAKE_WORD: process.env.WAKE_WORD || "مالفين"
        }
    },

    // الإعدادات المتقدمة
    AUTO_UPDATE,
    SECURITY,
    API_INTEGRATIONS,
    ADVANCED_POLICIES,
    ANALYTICS,

    // إعدادات التطوير المتقدمة
    DEV_CONFIG: {
        REMOTE_DEBUG: advancedBoolConverter(process.env.REMOTE_DEBUG || "false"),
        DEVTOOLS_PORT: process.env.DEVTOOLS_PORT || 9229,
        PERFORMANCE_MONITOR: advancedBoolConverter(process.env.PERF_MONITOR || "true")
    }
};
