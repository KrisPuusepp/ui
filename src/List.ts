import { Container } from '@pixi/display';

export type ListType = 'horizontal' | 'vertical';

export type ListOptions = {
    elementsMargin?: number;
    children?: Container[];
    vertPadding?: number;
    horPadding?: number;
};

/**
 * Container-based element for arranging Pixi containers based on their sizes.
 *
 * It is used inside elements with repeatable content, like {@link Select} or {@link ScrollBox}.
 * @example
 * const list = new List({
 *    children: [
        new Graphics().beginFill(0x000000).drawRect(0, 0, 50, 50),
        new Graphics().beginFill(0xFFFFFF).drawRect(0, 0, 50, 50),
 *    ],
 * });
 *
 * list.addChild(new Graphics().beginFill(0x000000).drawRect(0, 0, 50, 50));
 */
export class List extends Container
{
    private readonly options?: { type?: ListType } & ListOptions;

    /** Container, that holds all inner elements. */
    public view: Container;

    /** Arrange direction. */
    public type: ListType = 'vertical';

    /** Returns all arranged elements. */
    public override readonly children: Container[] = [];

    constructor(options?: { type?: ListType } & ListOptions)
    {
        super();

        this.options = options;

        if (options?.type)
        {
            this.type = options.type;
        }

        if (options?.children)
        {
            options.children.map((child) => this.addChild(child));
        }
    }

    protected override onChildrenChange()
    {
        let x = this.options?.horPadding ?? 0;
        let y = this.options?.vertPadding ?? 0;

        const elementsMargin = this.options?.elementsMargin ?? 0;

        this.children.forEach((child) =>
        {
            if (!this.type && x + child.width >= this.parent.width)
            {
                y += elementsMargin + child.height;
                x = this.options?.horPadding ?? 0;

                child.x = x;
                child.y = y;
            }
            else
            {
                child.x = x;
                child.y = y;
            }

            switch (this.type)
            {
                case 'horizontal':
                    x += elementsMargin + child.width;
                    break;

                case 'vertical':
                    y += elementsMargin + child.height;
                    break;

                default:
                    x += elementsMargin + child.width;
                    break;
            }
        });
    }
}
