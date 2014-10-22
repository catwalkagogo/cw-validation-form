var ChoiceOption = (function () {
    function ChoiceOption() {
    }
    ChoiceOption.prototype.attr = function (keyOrData, value) {
        return this._attr.access(keyOrData, value);
    };

    Object.defineProperty(ChoiceOption.prototype, "value", {
        get: function () {
            return this.attr('value');
        },
        set: function (value) {
            this.attr('value', value);
        },
        enumerable: true,
        configurable: true
    });

    return ChoiceOption;
})();

module.exports = ChoiceOption;
//# sourceMappingURL=ChoiceOption.js.map
