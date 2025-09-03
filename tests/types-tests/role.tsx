<div role="doc-abstract" />;
<div role="alert" />;
<div role="composite" />;
<div role="button" />;
<div role="heading" />;
<div role="banner" />;
<audio role="application" />;
<iframe role="document" />;
<ul role="tree" />;
<fieldset role="presentation" />;
<figcaption role="group" />;
<ol role="listbox" />;
<menu role="menubar" />;

/** Invalid ARIA roles */

// @ts-expect-error
<search role="alert" />;
// @ts-expect-error
<section role="composite" />;
// @ts-expect-error
<button role="button" />;
// @ts-expect-error
<h1 role="heading" />;
// @ts-expect-error
<header role="banner" />;
// @ts-expect-error
<audio role="button" />;
// @ts-expect-error
<iframe role="button" />;
// @ts-expect-error
<ul role="doc" />;
// @ts-expect-error
<template role="none" />;
// @ts-expect-error
<progress role="progressbar" />;
// @ts-expect-error
<fieldset role="banner" />;
// @ts-expect-error
<figcaption role="widget" />;
// @ts-expect-error
<nav role="navigation" />;
// @ts-expect-error
<ol role="cell" />;
// @ts-expect-error
<optgroup role="timer" />;
// @ts-expect-error
<option role="columnheader" />;
// @ts-expect-error
<picture role="img" />;
// @ts-expect-error
<summary role="input" />;
// @ts-expect-error
<main role="main" />;
// @ts-expect-error
<map role="link" />;
// @ts-expect-error
<menu role="navigation" />;
// @ts-expect-error
<meter role="progressbar" />;
