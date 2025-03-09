import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_points';
  info: {
    description: '';
    displayName: 'AboutPoints';
    icon: 'heart';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_details';
  info: {
    description: '';
    displayName: 'ContactDetail';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedExperince extends Struct.ComponentSchema {
  collectionName: 'components_shared_experinces';
  info: {
    description: '';
    displayName: 'Experince';
  };
  attributes: {
    company: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    fromDate: Schema.Attribute.Date;
    location: Schema.Attribute.String;
    role: Schema.Attribute.String;
    toDate: Schema.Attribute.Date;
  };
}

export interface SharedExpertise extends Struct.ComponentSchema {
  collectionName: 'components_shared_expertise';
  info: {
    displayName: 'Expertise';
    icon: 'paint';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    level: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedFilters extends Struct.ComponentSchema {
  collectionName: 'components_shared_filters';
  info: {
    description: '';
    displayName: 'Filters';
    icon: 'eye';
  };
  attributes: {
    skillTags: Schema.Attribute.Component<'shared.skill-tags', true>;
  };
}

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    input: Schema.Attribute.Component<'shared.input', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedInput extends Struct.ComponentSchema {
  collectionName: 'components_shared_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    link: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface SharedNavbarLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_links';
  info: {
    displayName: 'NavbarLinks';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedPhotoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_photo_cards';
  info: {
    displayName: 'PhotoCard';
    icon: 'landscape';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    skillTags: Schema.Attribute.Component<'shared.filters', false>;
    subheading: Schema.Attribute.String;
  };
}

export interface SharedSkillTags extends Struct.ComponentSchema {
  collectionName: 'components_shared_skill_tags';
  info: {
    displayName: 'SkillTags';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface SharedSkills extends Struct.ComponentSchema {
  collectionName: 'components_shared_skills';
  info: {
    displayName: 'Skills';
    icon: 'write';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    skill: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface SharedWorkTags extends Struct.ComponentSchema {
  collectionName: 'components_shared_work_tags';
  info: {
    displayName: 'workTags';
    icon: 'eye';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface SharedWorks extends Struct.ComponentSchema {
  collectionName: 'components_shared_works';
  info: {
    description: '';
    displayName: 'Works';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    githubLink: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    liveLink: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workTags: Schema.Attribute.Component<'shared.work-tags', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-points': SharedAboutPoints;
      'shared.contact-detail': SharedContactDetail;
      'shared.experince': SharedExperince;
      'shared.expertise': SharedExpertise;
      'shared.filters': SharedFilters;
      'shared.form': SharedForm;
      'shared.input': SharedInput;
      'shared.links': SharedLinks;
      'shared.navbar-links': SharedNavbarLinks;
      'shared.photo-card': SharedPhotoCard;
      'shared.skill-tags': SharedSkillTags;
      'shared.skills': SharedSkills;
      'shared.work-tags': SharedWorkTags;
      'shared.works': SharedWorks;
    }
  }
}
