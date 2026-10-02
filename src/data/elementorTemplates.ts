/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ElementorTemplateFile {
  id: string;
  name: string;
  filename: string;
  type: 'header' | 'footer' | 'single-post' | 'archive' | 'page' | 'kit' | 'css';
  description: string;
  conditions?: string;
  jsonContent: string;
}

export const ELEMENTOR_SITE_SETTINGS_KIT: ElementorTemplateFile = {
  id: 'site-settings',
  name: 'Global Site Settings & Style Kit',
  filename: 'atelier-site-settings-kit.json',
  type: 'kit',
  description: 'Global typography (Newsreader, Plus Jakarta Sans, JetBrains Mono), palette colors (#FAF8F5, #1C1917), and 1152px container widths.',
  jsonContent: JSON.stringify({
    version: '0.4',
    title: 'Atelier Editorial - Global Style Kit',
    type: 'kit',
    settings: {
      site_name: 'Atelier Editorial',
      site_description: 'Archival Blog & Website Blueprint',
      container_width: { unit: 'px', size: 1152 },
      space_between_widgets: { unit: 'px', size: 24 },
      page_title_selector: 'h1.entry-title',
      viewport_tablet: 768,
      viewport_mobile: 480,
      system_colors: [
        { _id: 'primary', title: 'Ink Obsidian (Text)', color: '#1C1917' },
        { _id: 'secondary', title: 'Ink Muted (Subtitles)', color: '#57534E' },
        { _id: 'text', title: 'Body Prose', color: '#44403C' },
        { _id: 'accent', title: 'Stone Divider', color: '#E7E5E4' }
      ],
      custom_colors: [
        { _id: 'canvas_cream', title: 'Canvas Linen', color: '#FAF8F5' },
        { _id: 'card_white', title: 'Surface White', color: '#FFFFFF' },
        { _id: 'oatmeal_wp', title: 'Oatmeal Accent', color: '#F2EDE4' },
        { _id: 'metadata_mono', title: 'Ledger Metadata', color: '#78716C' },
        { _id: 'emerald_auth', title: 'Author Desk Emerald', color: '#065F46' },
        { _id: 'rose_like', title: 'Monograph Rose', color: '#BE123C' }
      ],
      system_typography: [
        {
          _id: 'primary',
          title: 'Display Serif (Newsreader)',
          typography_font_family: 'Newsreader',
          typography_font_weight: '400',
          typography_line_height: { unit: 'em', size: 1.2 }
        },
        {
          _id: 'secondary',
          title: 'Subhead Serif Italic',
          typography_font_family: 'Newsreader',
          typography_font_weight: '400',
          typography_font_style: 'italic',
          typography_line_height: { unit: 'em', size: 1.35 }
        },
        {
          _id: 'text',
          title: 'Body Sans (Plus Jakarta Sans)',
          typography_font_family: 'Plus Jakarta Sans',
          typography_font_weight: '400',
          typography_line_height: { unit: 'em', size: 1.75 }
        },
        {
          _id: 'accent',
          title: 'Ledger Monospace (JetBrains Mono)',
          typography_font_family: 'JetBrains Mono',
          typography_font_weight: '500',
          typography_text_transform: 'uppercase',
          typography_letter_spacing: { unit: 'px', size: 1.2 }
        }
      ]
    },
    content: []
  }, null, 2)
};

export const ELEMENTOR_HEADER_TEMPLATE: ElementorTemplateFile = {
  id: 'theme-header',
  name: 'Theme Builder: Header',
  filename: 'atelier-header-elementor.json',
  type: 'header',
  description: 'Sticky 72px top bar, Newsreader logo, nav menu, and quick action buttons.',
  conditions: 'Entire Site',
  jsonContent: JSON.stringify({
    version: '0.4',
    title: 'Atelier - Global Header',
    type: 'header',
    content: [
      {
        id: 'atelier_header_container',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          width: { unit: 'px', size: 1152 },
          flex_direction: 'row',
          flex_justify_content: 'space-between',
          flex_align_items: 'center',
          padding: { unit: 'px', top: 16, right: 24, bottom: 16, left: 24 },
          background_background: 'classic',
          background_color: '#FAF8F5E6',
          border_border: 'solid',
          border_width: { unit: 'px', top: 0, right: 0, bottom: 1, left: 0 },
          border_color: '#E7E5E4',
          motion_fx_sticky: 'top',
          custom_css: 'selector { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); z-index: 100; }'
        },
        elements: [
          {
            id: 'brand_anchor',
            elType: 'widget',
            widgetType: 'heading',
            settings: {
              title: '<a href="/" style="text-decoration:none; color:#1C1917;"><span style="font-family:\'Newsreader\', serif; font-size:24px; font-weight:500; letter-spacing:-0.5px; display:block;">ATELIER</span><span style="font-family:\'JetBrains Mono\', monospace; font-size:10px; text-transform:uppercase; letter-spacing:2px; color:#A8A29E; display:block;">Journal &amp; Blueprint</span></a>'
            }
          },
          {
            id: 'site_navigation',
            elType: 'widget',
            widgetType: 'nav-menu',
            settings: {
              layout: 'horizontal',
              menu: 'primary-menu',
              typography_typography: 'custom',
              typography_font_family: 'Plus Jakarta Sans',
              typography_font_size: { unit: 'px', size: 13 },
              typography_font_weight: '500',
              color_menu_item: '#57534E',
              color_menu_item_hover: '#1C1917',
              color_menu_item_active: '#1C1917',
              pointer: 'underline',
              pointer_color_menu_item_active: '#1C1917'
            }
          },
          {
            id: 'header_actions_container',
            elType: 'container',
            settings: {
              flex_direction: 'row',
              flex_align_items: 'center',
              gap: { unit: 'px', size: 10 }
            },
            elements: [
              {
                id: 'btn_blueprint_guide',
                elType: 'widget',
                widgetType: 'button',
                settings: {
                  text: 'Blueprint Guide',
                  link: { url: '#blueprint' },
                  button_type: 'default',
                  typography_font_family: 'Plus Jakarta Sans',
                  typography_font_size: { unit: 'px', size: 12 },
                  typography_font_weight: '500',
                  button_text_color: '#FFFFFF',
                  background_color: '#1C1917',
                  border_radius: { unit: 'px', top: 8, right: 8, bottom: 8, left: 8 },
                  padding: { unit: 'px', top: 8, right: 14, bottom: 8, left: 14 }
                }
              }
            ]
          }
        ]
      }
    ]
  }, null, 2)
};

export const ELEMENTOR_FOOTER_TEMPLATE: ElementorTemplateFile = {
  id: 'theme-footer',
  name: 'Theme Builder: Footer',
  filename: 'atelier-footer-elementor.json',
  type: 'footer',
  description: '3-column publication directory, RSS label, architectural note, and back-to-top trigger.',
  conditions: 'Entire Site',
  jsonContent: JSON.stringify({
    version: '0.4',
    title: 'Atelier - Global Footer',
    type: 'footer',
    content: [
      {
        id: 'atelier_footer_container',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          width: { unit: 'px', size: 1152 },
          padding: { unit: 'px', top: 48, right: 24, bottom: 32, left: 24 },
          background_background: 'classic',
          background_color: '#FAF8F5',
          border_border: 'solid',
          border_width: { unit: 'px', top: 1, right: 0, bottom: 0, left: 0 },
          border_color: '#E7E5E4'
        },
        elements: [
          {
            id: 'footer_cols_grid',
            elType: 'container',
            settings: {
              flex_direction: 'row',
              flex_justify_content: 'space-between',
              gap: { unit: 'px', size: 32 }
            },
            elements: [
              {
                id: 'footer_col_brand',
                elType: 'container',
                settings: { width: { unit: '%', size: 40 } },
                elements: [
                  {
                    id: 'footer_logo',
                    elType: 'widget',
                    widgetType: 'heading',
                    settings: {
                      title: 'ATELIER',
                      typography_font_family: 'Newsreader',
                      typography_font_size: { unit: 'px', size: 24 },
                      typography_font_weight: '500',
                      title_color: '#1C1917'
                    }
                  },
                  {
                    id: 'footer_desc',
                    elType: 'widget',
                    widgetType: 'text-editor',
                    settings: {
                      editor: '<p style="color:#57534E; font-size:13px; line-height:1.6; font-family:\'Plus Jakarta Sans\', sans-serif;">An archival blog publication and website blueprint dedicated to slow reading, humane digital ergonomics, and classical editorial craft.</p>'
                    }
                  }
                ]
              },
              {
                id: 'footer_col_directory',
                elType: 'container',
                settings: { width: { unit: '%', size: 30 } },
                elements: [
                  {
                    id: 'footer_dir_title',
                    elType: 'widget',
                    widgetType: 'heading',
                    settings: {
                      title: 'PUBLICATION DIRECTORY',
                      typography_font_family: 'JetBrains Mono',
                      typography_font_size: { unit: 'px', size: 11 },
                      typography_font_weight: '600',
                      title_color: '#1C1917'
                    }
                  },
                  {
                    id: 'footer_dir_menu',
                    elType: 'widget',
                    widgetType: 'nav-menu',
                    settings: {
                      layout: 'vertical',
                      menu: 'footer-menu',
                      typography_font_family: 'Plus Jakarta Sans',
                      typography_font_size: { unit: 'px', size: 12 },
                      color_menu_item: '#57534E'
                    }
                  }
                ]
              },
              {
                id: 'footer_col_blueprint',
                elType: 'container',
                settings: { width: { unit: '%', size: 25 } },
                elements: [
                  {
                    id: 'footer_bp_title',
                    elType: 'widget',
                    widgetType: 'heading',
                    settings: {
                      title: 'ARCHIVAL BLUEPRINT',
                      typography_font_family: 'JetBrains Mono',
                      typography_font_size: { unit: 'px', size: 11 },
                      typography_font_weight: '600',
                      title_color: '#1C1917'
                    }
                  },
                  {
                    id: 'footer_bp_desc',
                    elType: 'widget',
                    widgetType: 'text-editor',
                    settings: {
                      editor: '<p style="color:#78716C; font-size:12px; line-height:1.5;">Curated and authored exclusively by Waleed Alharbi. Zero advertising or algorithmic tracking.</p>'
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'footer_subbar',
            elType: 'container',
            settings: {
              margin: { unit: 'px', top: 32, right: 0, bottom: 0, left: 0 },
              padding: { unit: 'px', top: 20, right: 0, bottom: 0, left: 0 },
              border_border: 'solid',
              border_width: { unit: 'px', top: 1, right: 0, bottom: 0, left: 0 },
              border_color: '#E7E5E4',
              flex_direction: 'row',
              flex_justify_content: 'space-between',
              flex_align_items: 'center'
            },
            elements: [
              {
                id: 'footer_copyright',
                elType: 'widget',
                widgetType: 'text-editor',
                settings: {
                  editor: '<span style="font-family:\'JetBrains Mono\', monospace; font-size:11px; color:#A8A29E;">© 2024–2026 Atelier Journal. Curated by Waleed Alharbi.</span>'
                }
              }
            ]
          }
        ]
      }
    ]
  }, null, 2)
};

export const ELEMENTOR_SINGLE_POST_TEMPLATE: ElementorTemplateFile = {
  id: 'theme-single-post',
  name: 'Theme Builder: Single Post (Monograph Reader)',
  filename: 'atelier-single-post-elementor.json',
  type: 'single-post',
  description: 'Editorial layout with drop-cap prose, 65-character optical measure, pull quote, and author card.',
  conditions: 'All Posts',
  jsonContent: JSON.stringify({
    version: '0.4',
    title: 'Atelier - Single Post Monograph',
    type: 'single-post',
    content: [
      {
        id: 'single_monograph_container',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          width: { unit: 'px', size: 760 },
          padding: { unit: 'px', top: 56, right: 24, bottom: 80, left: 24 },
          background_background: 'classic',
          background_color: '#FAF8F5'
        },
        elements: [
          {
            id: 'post_meta_ledger',
            elType: 'widget',
            widgetType: 'post-info',
            settings: {
              type: 'custom',
              show_meta_data: ['date', 'time'],
              typography_font_family: 'JetBrains Mono',
              typography_font_size: { unit: 'px', size: 12 },
              typography_text_transform: 'uppercase',
              text_color: '#78716C',
              custom_css: 'selector .elementor-icon-list-item { font-family:\'JetBrains Mono\', monospace; letter-spacing:1px; }'
            }
          },
          {
            id: 'post_title',
            elType: 'widget',
            widgetType: 'theme-post-title',
            settings: {
              typography_font_family: 'Newsreader',
              typography_font_size: { unit: 'px', size: 44 },
              typography_font_weight: '400',
              typography_line_height: { unit: 'em', size: 1.15 },
              title_color: '#1C1917',
              margin: { unit: 'px', top: 12, right: 0, bottom: 16, left: 0 }
            }
          },
          {
            id: 'post_featured_image',
            elType: 'widget',
            widgetType: 'theme-post-featured-image',
            settings: {
              border_radius: { unit: 'px', top: 12, right: 12, bottom: 12, left: 12 },
              margin: { unit: 'px', top: 24, right: 0, bottom: 36, left: 0 }
            }
          },
          {
            id: 'post_content_body',
            elType: 'widget',
            widgetType: 'theme-post-content',
            settings: {
              typography_font_family: 'Plus Jakarta Sans',
              typography_font_size: { unit: 'px', size: 17 },
              typography_line_height: { unit: 'em', size: 1.8 },
              text_color: '#383532',
              custom_css: `
                selector p:first-of-type::first-letter {
                  font-family: 'Newsreader', Georgia, serif;
                  font-size: 3.75rem;
                  line-height: 0.85;
                  float: left;
                  margin-right: 0.75rem;
                  margin-top: 0.25rem;
                  font-weight: 500;
                  color: #1C1917;
                }
                selector blockquote {
                  font-family: 'Newsreader', serif;
                  font-style: italic;
                  font-size: 1.5rem;
                  line-height: 1.4;
                  color: #1C1917;
                  border-top: 1px solid #D6D3D1;
                  border-bottom: 1px solid #D6D3D1;
                  padding: 1.5rem 1rem;
                  margin: 2.5rem 0;
                  text-align: center;
                }
              `
            }
          },
          {
            id: 'author_attribution_card',
            elType: 'container',
            settings: {
              margin: { unit: 'px', top: 48, right: 0, bottom: 24, left: 0 },
              padding: { unit: 'px', top: 24, right: 24, bottom: 24, left: 24 },
              background_background: 'classic',
              background_color: '#F5F5F4',
              border_border: 'solid',
              border_width: { unit: 'px', top: 1, right: 1, bottom: 1, left: 1 },
              border_color: '#E7E5E4',
              border_radius: { unit: 'px', top: 12, right: 12, bottom: 12, left: 12 },
              flex_direction: 'row',
              gap: { unit: 'px', size: 16 }
            },
            elements: [
              {
                id: 'author_avatar',
                elType: 'widget',
                widgetType: 'theme-author-box',
                settings: {
                  source: 'current_author',
                  show_name: 'yes',
                  show_biography: 'yes',
                  layout: 'image-left',
                  profile_image_border_radius: { unit: 'px', top: 99, right: 99, bottom: 99, left: 99 }
                }
              }
            ]
          },
          {
            id: 'post_navigation_next_prev',
            elType: 'widget',
            widgetType: 'post-navigation',
            settings: {
              prev_label: 'Previous Monograph',
              next_label: 'Next Monograph in Archive',
              typography_font_family: 'Newsreader',
              typography_font_size: { unit: 'px', size: 18 }
            }
          }
        ]
      }
    ]
  }, null, 2)
};

export const ELEMENTOR_HOME_PAGE_TEMPLATE: ElementorTemplateFile = {
  id: 'page-home',
  name: 'Page Template: Home (Lead Story & Dispatches)',
  filename: 'atelier-home-elementor.json',
  type: 'page',
  description: 'Editorial masthead banner, 7:5 asymmetric featured lead story, 3-column monograph grid, and postal subscription.',
  jsonContent: JSON.stringify({
    version: '0.4',
    title: 'Atelier - Home Page',
    type: 'page',
    content: [
      {
        id: 'home_masthead_section',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          width: { unit: 'px', size: 1152 },
          padding: { unit: 'px', top: 24, right: 24, bottom: 16, left: 24 },
          border_border: 'solid',
          border_width: { unit: 'px', top: 0, right: 0, bottom: 1, left: 0 },
          border_color: '#E7E5E4',
          flex_direction: 'row',
          flex_justify_content: 'space-between'
        },
        elements: [
          {
            id: 'masthead_volume',
            elType: 'widget',
            widgetType: 'text-editor',
            settings: {
              editor: '<span style="font-family:\'JetBrains Mono\', monospace; font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:#78716C;"><strong>Vol. IV · No. 2</strong> / Autumn 2026 Archive</span>'
            }
          },
          {
            id: 'masthead_locations',
            elType: 'widget',
            widgetType: 'text-editor',
            settings: {
              editor: '<span style="font-family:\'JetBrains Mono\', monospace; font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:#A8A29E;">Updated Fortnightly · Copenhagen · Zurich</span>'
            }
          }
        ]
      },
      {
        id: 'home_lead_story_container',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          width: { unit: 'px', size: 1152 },
          padding: { unit: 'px', top: 40, right: 24, bottom: 48, left: 24 },
          border_border: 'solid',
          border_width: { unit: 'px', top: 0, right: 0, bottom: 1, left: 0 },
          border_color: '#E7E5E4'
        },
        elements: [
          {
            id: 'lead_story_header_label',
            elType: 'widget',
            widgetType: 'heading',
            settings: {
              title: 'LEAD STORY · FEATURED RELEASE',
              typography_font_family: 'JetBrains Mono',
              typography_font_size: { unit: 'px', size: 11 },
              typography_font_weight: '500',
              typography_letter_spacing: { unit: 'px', size: 2 },
              title_color: '#78716C'
            }
          },
          {
            id: 'lead_story_grid',
            elType: 'container',
            settings: {
              flex_direction: 'row',
              gap: { unit: 'px', size: 40 },
              margin: { unit: 'px', top: 16, right: 0, bottom: 0, left: 0 }
            },
            elements: [
              {
                id: 'lead_story_image_col',
                elType: 'container',
                settings: { width: { unit: '%', size: 58 } },
                elements: [
                  {
                    id: 'lead_image',
                    elType: 'widget',
                    widgetType: 'image',
                    settings: {
                      image: { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80' },
                      border_radius: { unit: 'px', top: 12, right: 12, bottom: 12, left: 12 }
                    }
                  }
                ]
              },
              {
                id: 'lead_story_text_col',
                elType: 'container',
                settings: {
                  width: { unit: '%', size: 42 },
                  flex_justify_content: 'center'
                },
                elements: [
                  {
                    id: 'lead_story_meta',
                    elType: 'widget',
                    widgetType: 'text-editor',
                    settings: {
                      editor: '<span style="font-family:\'JetBrains Mono\', monospace; font-size:11px; text-transform:uppercase; color:#78716C;">Sep 24, 2026 · 8 min read</span>'
                    }
                  },
                  {
                    id: 'lead_story_heading',
                    elType: 'widget',
                    widgetType: 'heading',
                    settings: {
                      title: 'The Architecture of Silence: Designing for Cognitive Restraint',
                      typography_font_family: 'Newsreader',
                      typography_font_size: { unit: 'px', size: 36 },
                      typography_font_weight: '400',
                      typography_line_height: { unit: 'em', size: 1.2 },
                      title_color: '#1C1917'
                    }
                  },
                  {
                    id: 'lead_story_excerpt',
                    elType: 'widget',
                    widgetType: 'text-editor',
                    settings: {
                      editor: '<p style="color:#57534E; font-size:15px; line-height:1.7; font-family:\'Plus Jakarta Sans\', sans-serif;">Why contemporary interfaces must abandon perpetual stimulation in favor of generous negative space, deliberate typographic measures, and mental tranquility.</p>'
                    }
                  },
                  {
                    id: 'lead_story_cta',
                    elType: 'widget',
                    widgetType: 'button',
                    settings: {
                      text: 'Read Monograph →',
                      typography_font_family: 'Plus Jakarta Sans',
                      typography_font_size: { unit: 'px', size: 13 },
                      typography_font_weight: '600',
                      button_text_color: '#1C1917',
                      background_color: 'transparent',
                      padding: { unit: 'px', top: 0, right: 0, bottom: 0, left: 0 }
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'home_posts_archive_container',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          width: { unit: 'px', size: 1152 },
          padding: { unit: 'px', top: 48, right: 24, bottom: 48, left: 24 }
        },
        elements: [
          {
            id: 'archive_header_row',
            elType: 'container',
            settings: {
              flex_direction: 'row',
              flex_justify_content: 'space-between',
              flex_align_items: 'flex-end',
              margin: { unit: 'px', top: 0, right: 0, bottom: 24, left: 0 }
            },
            elements: [
              {
                id: 'archive_header_title',
                elType: 'widget',
                widgetType: 'heading',
                settings: {
                  title: 'New Articles & Dispatches',
                  typography_font_family: 'Newsreader',
                  typography_font_size: { unit: 'px', size: 28 },
                  typography_font_weight: '400',
                  title_color: '#1C1917'
                }
              }
            ]
          },
          {
            id: 'posts_grid_widget',
            elType: 'widget',
            widgetType: 'posts',
            settings: {
              posts_per_page: 6,
              columns: 3,
              show_image: 'yes',
              image_size: 'medium_large',
              image_ratio: { unit: '%', size: 66 },
              show_title: 'yes',
              title_tag: 'h3',
              typography_title_font_family: 'Newsreader',
              typography_title_font_size: { unit: 'px', size: 22 },
              typography_title_font_weight: '400',
              show_excerpt: 'yes',
              excerpt_length: 22,
              show_read_more: 'yes',
              read_more_text: 'Read Monograph →',
              show_meta_data: 'yes',
              meta_data: ['date'],
              typography_meta_font_family: 'JetBrains Mono',
              typography_meta_font_size: { unit: 'px', size: 11 }
            }
          }
        ]
      }
    ]
  }, null, 2)
};

export const ELEMENTOR_ARCHIVE_TEMPLATE: ElementorTemplateFile = {
  id: 'theme-archive',
  name: 'Theme Builder: Archive Ledger',
  filename: 'atelier-archive-elementor.json',
  type: 'archive',
  description: 'Full historical catalogue, live search bar, and 3-column monograph grid.',
  conditions: 'All Archives',
  jsonContent: JSON.stringify({
    version: '0.4',
    title: 'Atelier - Archive Ledger',
    type: 'archive',
    content: [
      {
        id: 'archive_container',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          width: { unit: 'px', size: 1152 },
          padding: { unit: 'px', top: 48, right: 24, bottom: 64, left: 24 },
          background_background: 'classic',
          background_color: '#FAF8F5'
        },
        elements: [
          {
            id: 'archive_title_ledger',
            elType: 'widget',
            widgetType: 'theme-archive-title',
            settings: {
              typography_font_family: 'Newsreader',
              typography_font_size: { unit: 'px', size: 40 },
              typography_font_weight: '400',
              title_color: '#1C1917'
            }
          },
          {
            id: 'archive_search_widget',
            elType: 'widget',
            widgetType: 'search-form',
            settings: {
              skin: 'classic',
              placeholder: 'Search monographs, titles, or prose...',
              border_radius: { unit: 'px', top: 8, right: 8, bottom: 8, left: 8 },
              margin: { unit: 'px', top: 20, right: 0, bottom: 40, left: 0 }
            }
          },
          {
            id: 'archive_posts_grid',
            elType: 'widget',
            widgetType: 'archive-posts',
            settings: {
              posts_per_page: 9,
              columns: 3,
              show_image: 'yes',
              image_ratio: { unit: '%', size: 66 },
              show_title: 'yes',
              typography_title_font_family: 'Newsreader',
              typography_title_font_size: { unit: 'px', size: 22 },
              show_excerpt: 'yes',
              excerpt_length: 24,
              show_read_more: 'yes',
              read_more_text: 'Read Monograph →',
              pagination_type: 'numbers_and_prev_next'
            }
          }
        ]
      }
    ]
  }, null, 2)
};

export const ELEMENTOR_ABOUT_TEMPLATE: ElementorTemplateFile = {
  id: 'page-about',
  name: 'Page Template: About (Curator & Manifesto)',
  filename: 'atelier-about-elementor.json',
  type: 'page',
  description: 'Curator profile (Waleed Alharbi), 4 archival metrics, and the 4 editorial pillars.',
  jsonContent: JSON.stringify({
    version: '0.4',
    title: 'Atelier - About the Publication',
    type: 'page',
    content: [
      {
        id: 'about_hero_container',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          width: { unit: 'px', size: 1152 },
          padding: { unit: 'px', top: 48, right: 24, bottom: 48, left: 24 },
          flex_direction: 'row',
          gap: { unit: 'px', size: 48 }
        },
        elements: [
          {
            id: 'about_author_photo_col',
            elType: 'container',
            settings: { width: { unit: '%', size: 35 } },
            elements: [
              {
                id: 'author_photo',
                elType: 'widget',
                widgetType: 'image',
                settings: {
                  image: { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80' },
                  border_radius: { unit: 'px', top: 16, right: 16, bottom: 16, left: 16 },
                  custom_css: 'selector img { filter: grayscale(100%) contrast(105%); }'
                }
              }
            ]
          },
          {
            id: 'about_author_bio_col',
            elType: 'container',
            settings: {
              width: { unit: '%', size: 65 },
              flex_justify_content: 'center'
            },
            elements: [
              {
                id: 'curator_label',
                elType: 'widget',
                widgetType: 'heading',
                settings: {
                  title: 'ABOUT THE PUBLICATION · COPENHAGEN & ZURICH',
                  typography_font_family: 'JetBrains Mono',
                  typography_font_size: { unit: 'px', size: 11 },
                  typography_letter_spacing: { unit: 'px', size: 1.5 },
                  title_color: '#78716C'
                }
              },
              {
                id: 'curator_name',
                elType: 'widget',
                widgetType: 'heading',
                settings: {
                  title: 'Waleed Alharbi',
                  typography_font_family: 'Newsreader',
                  typography_font_size: { unit: 'px', size: 48 },
                  typography_font_weight: '400',
                  title_color: '#1C1917'
                }
              },
              {
                id: 'curator_title_role',
                elType: 'widget',
                widgetType: 'text-editor',
                settings: {
                  editor: '<p style="font-family:\'Newsreader\', serif; font-style:italic; font-size:18px; color:#57534E;">Architectural essayist, digital typographer, and sole curator of Atelier.</p>'
                }
              },
              {
                id: 'curator_manifesto_prose',
                elType: 'widget',
                widgetType: 'text-editor',
                settings: {
                  editor: '<p style="font-family:\'Plus Jakarta Sans\', sans-serif; font-size:15px; line-height:1.75; color:#44403C;">Atelier was conceived as an independent digital sanctuary—a curated journal where long-form essays on typography, spatial architecture, and software humanism could be published free from advertising clutter and synthetic velocity.</p>'
                }
              }
            ]
          }
        ]
      }
    ]
  }, null, 2)
};

export const ELEMENTOR_CONTACT_TEMPLATE: ElementorTemplateFile = {
  id: 'page-contact',
  name: 'Page Template: Contact (Letters to Desk & FAQ)',
  filename: 'atelier-contact-elementor.json',
  type: 'page',
  description: 'Inquiry form, office coordinates, and 4-item editorial FAQ accordion.',
  jsonContent: JSON.stringify({
    version: '0.4',
    title: 'Atelier - Contact & Registry',
    type: 'page',
    content: [
      {
        id: 'contact_container',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          width: { unit: 'px', size: 1152 },
          padding: { unit: 'px', top: 48, right: 24, bottom: 64, left: 24 },
          flex_direction: 'row',
          gap: { unit: 'px', size: 48 }
        },
        elements: [
          {
            id: 'contact_form_col',
            elType: 'container',
            settings: {
              width: { unit: '%', size: 60 },
              padding: { unit: 'px', top: 32, right: 32, bottom: 32, left: 32 },
              background_background: 'classic',
              background_color: '#FFFFFF',
              border_radius: { unit: 'px', top: 16, right: 16, bottom: 16, left: 16 },
              border_border: 'solid',
              border_width: { unit: 'px', top: 1, right: 1, bottom: 1, left: 1 },
              border_color: '#E7E5E4'
            },
            elements: [
              {
                id: 'contact_form_heading',
                elType: 'widget',
                widgetType: 'heading',
                settings: {
                  title: 'Letters to the Editorial Desk',
                  typography_font_family: 'Newsreader',
                  typography_font_size: { unit: 'px', size: 28 },
                  title_color: '#1C1917'
                }
              },
              {
                id: 'contact_form_widget',
                elType: 'widget',
                widgetType: 'form',
                settings: {
                  form_name: 'Editorial Desk Inquiry',
                  form_fields: [
                    { _id: 'name', field_label: 'Your Name', field_type: 'text', required: 'true' },
                    { _id: 'email', field_label: 'Email Address', field_type: 'email', required: 'true' },
                    { _id: 'message', field_label: 'Your Correspondence', field_type: 'textarea', required: 'true' }
                  ],
                  button_text: 'Send Correspondence',
                  button_background_color: '#1C1917',
                  button_text_color: '#FFFFFF'
                }
              }
            ]
          },
          {
            id: 'contact_faq_col',
            elType: 'container',
            settings: { width: { unit: '%', size: 40 } },
            elements: [
              {
                id: 'faq_heading',
                elType: 'widget',
                widgetType: 'heading',
                settings: {
                  title: 'Editorial FAQ',
                  typography_font_family: 'Newsreader',
                  typography_font_size: { unit: 'px', size: 24 },
                  title_color: '#1C1917',
                  margin: { unit: 'px', top: 0, right: 0, bottom: 16, left: 0 }
                }
              },
              {
                id: 'faq_accordion',
                elType: 'widget',
                widgetType: 'accordion',
                settings: {
                  tabs: [
                    {
                      tab_title: 'Do you accept unsolicited essay submissions?',
                      tab_content: 'We welcome scholarly and practitioner submissions focused on digital typography, spatial computing, and architectural theory.'
                    },
                    {
                      tab_title: 'How frequently does Atelier publish new writings?',
                      tab_content: 'We operate on a fortnightly editorial cadence (one substantive monograph every two weeks).'
                    }
                  ],
                  title_color: '#1C1917',
                  typography_title_font_family: 'Plus Jakarta Sans',
                  typography_title_font_size: { unit: 'px', size: 14 }
                }
              }
            ]
          }
        ]
      }
    ]
  }, null, 2)
};

export const ELEMENTOR_CUSTOM_CSS: ElementorTemplateFile = {
  id: 'elementor-css',
  name: 'Elementor Custom CSS & Typographic Rules',
  filename: 'atelier-elementor-custom-css.css',
  type: 'css',
  description: 'Drop cap styling, 65-character classical optical measure, and editorial unboxed metadata rules.',
  jsonContent: `/* ==========================================================================
   ATELIER EDITORIAL — ELEMENTOR CUSTOM CSS SPECIFICATION
   Paste into: Elementor -> Site Settings -> Custom CSS (or WP Customizer)
   ========================================================================== */

/* 1. Google Fonts Import (if not enqueued by your theme) */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

/* 2. Global Canvas & Ink Variables */
:root {
  --atelier-canvas: #FAF8F5;
  --atelier-white: #FFFFFF;
  --atelier-ink-primary: #1C1917;
  --atelier-ink-muted: #57534E;
  --atelier-ink-body: #44403C;
  --atelier-border: #E7E5E4;
  --atelier-oatmeal: #F2EDE4;
  --atelier-emerald: #065F46;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

body {
  background-color: var(--atelier-canvas) !important;
  color: var(--atelier-ink-primary);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

/* 3. Editorial Drop-Cap (Applied to first paragraph of single posts) */
.elementor-widget-theme-post-content p:first-of-type::first-letter,
.editorial-drop-cap::first-letter {
  font-family: var(--font-serif);
  font-size: 3.75rem;
  line-height: 0.85;
  float: left;
  margin-right: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
  color: var(--atelier-ink-primary);
}

/* 4. Classical 65-Character Optical Measure */
.elementor-widget-theme-post-content {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.elementor-widget-theme-post-content p {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--atelier-ink-body);
  margin-bottom: 1.75rem;
}

/* 5. Editorial Pull-Quotes */
.elementor-widget-theme-post-content blockquote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.625rem;
  line-height: 1.35;
  color: var(--atelier-ink-primary);
  border-top: 1px solid var(--atelier-border);
  border-bottom: 1px solid var(--atelier-border);
  border-left: none;
  padding: 1.75rem 1rem;
  margin: 3rem 0;
  text-align: center;
}

/* 6. Unboxed Zero-Pill Post Metadata */
.elementor-post-info__item,
.elementor-post__meta-data {
  font-family: var(--font-mono) !important;
  font-size: 0.75rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: #78716C !important;
}

/* 7. Hover Transitions on Cards */
.elementor-post:hover .elementor-post__thumbnail img {
  transform: scale(1.02);
  transition: transform 0.4s ease-out;
}
`
};

export const ALL_ELEMENTOR_TEMPLATES: ElementorTemplateFile[] = [
  ELEMENTOR_SITE_SETTINGS_KIT,
  ELEMENTOR_HEADER_TEMPLATE,
  ELEMENTOR_FOOTER_TEMPLATE,
  ELEMENTOR_SINGLE_POST_TEMPLATE,
  ELEMENTOR_HOME_PAGE_TEMPLATE,
  ELEMENTOR_ARCHIVE_TEMPLATE,
  ELEMENTOR_ABOUT_TEMPLATE,
  ELEMENTOR_CONTACT_TEMPLATE,
  ELEMENTOR_CUSTOM_CSS
];
