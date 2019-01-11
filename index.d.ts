import * as tinymce from 'tinymce';

declare module 'tinymce' {
  export interface ShopifySettings extends tinymce.Settings {
    [key: string]: any,
  }

  export function init(settings: ShopifySettings): Promise<tinymce.Editor[]>;

  export const shopifyConfig: ShopifySettings;
}

export * from 'tinymce';
