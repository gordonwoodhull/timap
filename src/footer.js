return timap;
}
    if (typeof define === 'function' && define.amd) {
        define([], _timap);
    } else if (typeof module == "object" && module.exports) {
        module.exports = _timap();
    } else {
        this.timap = _timap();
    }
}
)();
