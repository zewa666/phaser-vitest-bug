# Issue with Vitest and Phaser3

I've been able to reproduce this issue on Win10 and Ubuntu, although they appear in a bit different variance (error codes, vs straight kill of execution)

* npm install
* npm test
* open `demo.spec.ts` and hit control+s (trigger re-test)
* watch the command line output

```bash
(process:16044): GLib-GObject-WARNING **: 19:29:39.729: cannot register existing type 'PangoFontMap'

(process:16044): GLib-GObject-WARNING **: 19:29:39.729: cannot add private field to invalid (non-instantiatable) type '<invalid>'

(process:16044): GLib-GObject-CRITICAL **: 19:29:39.729: g_type_add_interface_static: assertion 'G_TYPE_IS_INSTANTIATABLE (instance_type)' failed

(process:16044): GLib-CRITICAL **: 19:29:39.729: g_once_init_leave: assertion 'result != 0' failed

(process:16044): GLib-GObject-CRITICAL **: 19:29:39.729: g_type_register_static: assertion 'parent_type > 0' failed

(process:16044): GLib-GObject-WARNING **: 19:29:39.729: cannot add private field to invalid (non-instantiatable) type '<invalid>'

(process:16044): GLib-GObject-CRITICAL **: 19:29:39.729: g_type_add_interface_static: assertion 'G_TYPE_IS_INSTANTIATABLE (instance_type)' failed

(process:16044): GLib-CRITICAL **: 19:29:39.729: g_once_init_leave: assertion 'result != 0' failed

(process:16044): GLib-GObject-CRITICAL **: 19:29:39.729: g_type_register_static: assertion 'parent_type > 0' failed

(process:16044): GLib-GObject-WARNING **: 19:29:39.729: cannot register existing type 'PangoCairoFontMap'
```