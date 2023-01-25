import { Container } from '@pixi/display';
import { Graphics } from '@pixi/graphics';
import { getView } from './utils/helpers/view';

export type ProgressBarOptions = {
    bg: Container | string;
    fill: Container | string;
    progress?: number;
    fillOffset?: {
        x?: number;
        y?: number;
    };
};

/**
 * Creates a ProgressBar
 * @example
 * ```
 * new ProgressBar({
 *     bg: 'slider_bg.png',
 *     fill: 'slider.png',
 *     progress: 50,
 * });
 *
 * singleSlider.onChange.connect((value) => {
 *     onChange(`Slider changed > ${value}`);
 * });
 * ```
 */
export class ProgressBar extends Container
{
    protected readonly bg: Container;
    protected readonly fill?: Container;
    protected readonly fillMask?: Graphics;

    /** Container, that holds all inner views. */
    public innerView: Container;

    /** Current progress value. */
    public _progress = 0;

    constructor({ bg, fill, fillOffset, progress }: ProgressBarOptions)
    {
        super();

        this.innerView = new Container();
        this.addChild(this.innerView);

        this.bg = new Container();
        this.bg.addChild(getView(bg));

        this.innerView.addChild(this.bg);

        if (fill)
        {
            this.fill = new Container();
            this.fill.addChild(getView(fill));

            const offsetX = fillOffset?.x ?? 0;
            const offsetY = fillOffset?.y ?? 0;

            this.fill.x = ((this.bg.width - this.fill.width) / 2) + offsetX;
            this.fill.y = ((this.bg.height - this.fill.height) / 2) + offsetY;

            this.fillMask = new Graphics();
            this.fill.addChild(this.fillMask);
            this.fill.mask = this.fillMask;

            this.addChild(this.fill);
        }

        this.progress = progress;
    }

    protected validateSettings()
    {
        const min = 0;
        const max = 100;

        if (this._progress < min)
        {
            this._progress = min;
        }

        if (this._progress > max)
        {
            this._progress = max;
        }
    }

    set progress(progress: number)
    {
        this._progress = progress;

        this.validateSettings();

        const startPoint = 0;
        const endPoint = (this.bg.width / 100) * this._progress;

        if (this.fillMask)
        {
            this.fillMask
                .clear()
                .lineStyle(0)
                .beginFill(0xffffff)
                .drawRect(startPoint, 0, endPoint - startPoint, this.fill.height);
        }
    }

    get progress(): number
    {
        return this._progress;
    }
}
