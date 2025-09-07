/** Valid ARIA roles */

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
<hr role="none" />;
<form role="search" />;
<footer role="group" />;
<a href="#" role="button" />;
<a role="cell" />;
<area role="button" />;
<area role="link" />;
<abbr role="blockquote" />;
<acronym role="code" />;
<article role="document" />;
<aside role="complementary" />;
<blockquote role="tabpanel" />;
<br role="presentation" />;
<canvas role="img" />;
<caption role="caption" />;
<data role="doc-introduction" />;
<datalist role="listbox" />;
<del role="code" />;
<details role="group" />;
<dialog role="alertdialog" />;
<dl role="list" />;
<dt role="listitem" />;
<em role="emphasis" />;
<embed role="application" />;
<h1 role="heading" />;
<header role="banner" />;
<hr role="separator" />;
<form role="form" />;
<img alt="desc" role="img" />;
<img aria-label="description" role="slider" />;
<img role="none" />;

/** Invalid ARIA roles */

// @ts-expect-error
<search role="alert" />;
// @ts-expect-error
<section role="composite" />;
// @ts-expect-error
<button role="code" />;
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
// @ts-expect-error
<legend role="meter" />;
// @ts-expect-error
<label role="textbox" />;
// @ts-expect-error
<track role="columnheader" />;
// @ts-expect-error
<footer role="treegrid" />;
// @ts-expect-error
<a href="#" role="cell" />;
// @ts-expect-error
<area href="#" role="button" />;
// @ts-expect-error
<base role="banner" />;
// @ts-expect-error
<br role="cell" />;
// @ts-expect-error
<caption role="link" />;
// @ts-expect-error
<col role="columnheader" />;
// @ts-expect-error
<colgroup role="gridcell" />;
// @ts-expect-error
<datalist role="table" />;
// @ts-expect-error
<dd role="definition" />;
// @ts-expect-error
<details role="complementary" />;
// @ts-expect-error
<dialog role="navigation" />;
// @ts-expect-error
<dl role="directory" />;
// @ts-expect-error
<dt role="widget" />;
// @ts-expect-error
<embed role="list" />;
// @ts-expect-error
<img alt="description" role="none" />;
