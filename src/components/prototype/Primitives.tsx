import type { ComponentPropsWithoutRef, ElementType, FormEvent, ReactNode } from "react";
import {
  ButtonTextTransform,
  ButtonType,
  Input,
  InputType,
  Tag,
  TagSize,
} from "react-magma-dom";
import { Button } from "../Button";

function joinClassNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

type ContainerSize = "shell" | "medium" | "narrow" | "support";

type ContentContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className">;

export function ContentContainer<T extends ElementType = "div">({
  as,
  children,
  className,
  size = "shell",
  ...rest
}: ContentContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={joinClassNames("prototype-container", `prototype-container--${size}`, className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

type OptionalLinkProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  rel?: string;
  staticAs?: "div" | "span";
  staticClassName?: string;
  target?: string;
};

export function OptionalLink({
  children,
  className,
  href,
  rel,
  staticAs = "span",
  staticClassName = "is-static",
  target,
}: OptionalLinkProps) {
  if (href) {
    return (
      <a className={className} href={href} rel={rel} target={target}>
        {children}
      </a>
    );
  }

  const StaticComponent = staticAs;

  return (
    <StaticComponent className={joinClassNames(className, staticClassName)}>
      {children}
    </StaticComponent>
  );
}

type SectionHeaderProps = {
  className?: string;
  copyClassName?: string;
  description?: ReactNode;
  title: ReactNode;
};

export function SectionHeader({
  className,
  copyClassName,
  description,
  title,
}: SectionHeaderProps) {
  return (
    <div className={joinClassNames("prototype-section-header", className)}>
      <h2>{title}</h2>
      {description ? <p className={copyClassName}>{description}</p> : null}
    </div>
  );
}

type PageHeroBandProps = {
  bandClassName: string;
  children?: ReactNode;
  containerClassName?: string;
  containerSize?: ContainerSize;
  copyClassName: string;
  description?: ReactNode;
  descriptionClassName?: string;
  heroClassName: string;
  icon?: ReactNode;
  iconClassName?: string;
  title: ReactNode;
};

export function PageHeroBand({
  bandClassName,
  children,
  containerClassName,
  containerSize = "shell",
  copyClassName,
  description,
  descriptionClassName,
  heroClassName,
  icon,
  iconClassName,
  title,
}: PageHeroBandProps) {
  return (
    <section className={joinClassNames("prototype-hero-band", bandClassName)}>
      <ContentContainer className={containerClassName} size={containerSize}>
        <div className={joinClassNames("prototype-page-hero", heroClassName)}>
          {icon ? <div className={iconClassName}>{icon}</div> : null}

          <div className={joinClassNames("prototype-page-hero-copy", copyClassName)}>
            <h1>{title}</h1>
            {description ? <p className={descriptionClassName}>{description}</p> : null}
            {children}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}

type SupportFallbackLink = {
  href: string;
  label: ReactNode;
};

type SupportFallbackBlockProps = {
  className?: string;
  links: SupportFallbackLink[];
  title?: ReactNode;
};

export function SupportFallbackBlock({
  className,
  links,
  title = "Still need help?",
}: SupportFallbackBlockProps) {
  return (
    <section className={joinClassNames("prototype-support-fallback", className)}>
      <h2>{title}</h2>
      {links.map((link) => (
        <a key={String(link.label)} href={link.href}>
          {link.label}
        </a>
      ))}
    </section>
  );
}

type PrototypeSearchFormProps = {
  buttonLabel?: string;
  className?: string;
  inputId: string;
  isLabelVisuallyHidden?: boolean;
  labelText: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder: string;
  value: string;
};

export function PrototypeSearchForm({
  buttonLabel = "Search",
  className,
  inputId,
  isLabelVisuallyHidden = true,
  labelText,
  onChange,
  onSubmit,
  placeholder,
  value,
}: PrototypeSearchFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className={joinClassNames("prototype-search-form", className)} onSubmit={handleSubmit}>
      <div className="prototype-search-form-field">
        <Input
          id={inputId}
          isLabelVisuallyHidden={isLabelVisuallyHidden}
          labelText={labelText}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type={InputType.search}
          value={value}
          width="100%"
        />
      </div>

      <Button
        className="prototype-search-form-button"
        textTransform={ButtonTextTransform.none}
        type={ButtonType.submit}
      >
        {buttonLabel}
      </Button>
    </form>
  );
}

type MetadataTagProps = {
  children: ReactNode;
  className?: string;
};

export function MetadataTag({ children, className }: MetadataTagProps) {
  return (
    <Tag className={joinClassNames("prototype-metadata-tag", className)} size={TagSize.medium}>
      {children}
    </Tag>
  );
}

type RailCardProps = {
  children: ReactNode;
  className?: string;
  title: ReactNode;
};

export function RailCard({ children, className, title }: RailCardProps) {
  return (
    <section className={joinClassNames("prototype-rail-card", className)}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
