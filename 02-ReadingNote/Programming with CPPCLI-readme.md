# .NET Programming with C++/CLI (Visual C++)

* C++/CLI Tasks
* Native and .NET Interoperability
* C++/CLI Migration Primer
* Pure and Verifiable Code
* Regular Expressions
* File Handling and I/O
* Graphics Operations
* Windows Operations
* Data Access Using ADO.NET
* Interoperability with Other .NET Languages
* Serialization
* Managed Types
* Reflection
* Strong Name Assemblies (Assembly Signing)
* Debug Class
* STL/CLR Library Reference
* C++ Support Library
* Exception in C++/CLI
* Boxing

## C++/CLI Tasks

* How to: Create CLR Empty Projects
* How to: Create CLR Console Applications
* How to: Use Tracking Reference in C++/CLI
  * To pass CLR types by reference.
    * Code 1 (Done) : tracking_reference_handles.cpp
    * code 2 (Done) : tracking_reference_data.cpp
  * Tracking reference and interior pointers
    * Code 1: tracking_reference_interior_ptr.cpp
  * Tracking reference and value types
    * Code 1: tracking_reference_valuetypes_2.cpp
    * Code 2: tracking_reference_valuetypes_3.cpp
    * Code 3: tracking_reference_valuetypes_4.cpp
  * Template functions that take native, value, or reference parameters
    * Code 1: tracking_reference_template.cpp

* How to: Use Arrays in C++/CLI
  * Single-dimension arrays
    * Code 1: mcppv2_sdarrays.cpp
    * Code 2: mcppv2_sdarrays_aggregate_init.cpp
    * Code 3: mcppv2_mdarrays_aggregate_initialization.cpp
  * Jagged arrays
    * Code 1: mcppv2_array_of_arrays.cpp
    * Code 2: mcppv2_array_of_arrays_aggregate_init.cpp
  * Managed arrays as template type parameters
    * Code 1: mcppv2_template_type_params.cpp
  * typedefs for managed arrays
    * Code 1: mcppv2_typedef_arrays.cpp
  * Sorting arrays
    * Code 1: array_sort.cpp
  * Sorting arrays by using custom criteria
    * Code 1: array_soort_by_custom.cpp
  * Array covariance
    * Code 1: clr_array_covariance.cpp
    * Code 2: clr_array_covariance2.cpp

* How to: Define and Consume Classes and Structs (C++/CLI)
  * Object instantiation
    * Code 1: mcppv2_ref_class2.cpp
  * Implicitly abstract classes
    * Code 1: mcppv2_ref_class5.cpp
  * Type visibility
    * Code 1: type_visibility.cpp
    * Code 2: type_visibility_2.cpp
    * Code 3: type_visibility_3.cpp
  * Member visibility
    * Code 1: type_member_visibility.cpp
    * Code 2: type_member_visibility_2.cpp
    * Code 3: type_member_visibility_3.cpp
  * Public and private native classes
    * Code 1: mcppv2_ref_class3.h
    * Code 2: mcppv2_ref_class3.cpp
    * Code 3: mcppv2_ref_class4.cpp
  * Static constructors
    * Code 1: mcppv2_ref_class6.cpp
  * Semantics of the this pointer
    * Code 1: semantics_of_this_pointer.cpp
  * Hide-by-signature functions
    * Code 1: hide_by_signature_1.cpp
    * Code 2: hide_by_signature_2.cpp
    * Code 3: hide_by_signature_3.cpp
    * Code 4: hide_by_signature_4.cpp
    * Code 5: hide_by_signature_5.cpp
  * Copy constructors
    * Code 1: breaking_change_no_copy_ctor.cpp
  * Destrctors and finalizers
    * Code 1: destructors_finalizers_1.cpp
    * Code 2: clr_destructors.cpp
    * Code 3: destructors_finalizers_2.cpp

* C++ Stack Semantics for Reference Types
  * Code 1: stack_semantics_for_reference_types.cpp

* User-Defined Operators (C++/CLI)
  * Code 1: mcppv2_user-defined_operators.cpp
  * Code 2: mcppv2_user-defined_operators_2.cpp

* User-Defined Conversions (C++/CLI)
  * Implicit and explicit conversions
    * Code 1: mcpp_User_Defined_Conversions.cpp
  * Convert-From Operators
    * Code 2: clr_udc_convert_from.cpp
  * Conver-to operators
    * clr_udc_convert_to.cpp
    * clr_udc_convert_to_2.cpp
  * To convert generic classes
    * clr_udc_generics.cpp
    * clr_udc_converting_constructors.cpp

* initonly (C++/CLI)
  * Code 1: mcpp_initonly.cpp

* How to: Define and Use Delegates (C++/CLI)
  * Code 1: use_delegate.cpp
  * Code 2: mcppv2_del_mem_value_class.cpp
  * How to compose delegates
    * Code 1: mcppv2_compose_delegates.cpp
  * Pass a delegate^ to a native function that expects a function pointer
    * Code 1: delegate_to_native_function.cpp
    * Code 2: delegate_to_native_function_2.cpp
  * To associate delegates with unmanaged functions
    * Code 1: mcppv2_del_to_umnangd_func.cpp
  * To use unbound delegates
    * Code 1: unbound_delegates.cpp
    * Code 2: unbound_delegates_2.cpp
    * Code 3: unbound_delegates_3.cpp
    * Code 4: unbound_delegates_4.cpp
    * Code 5: unbound_delegates_5.cpp

* How to: Define and consume enums in C++/CLI
  * Specifying the underlying type of an enum
    * Code 1: mcppv2_enum_3.cpp
  * How to convert between managed and standard enumerations
    * Code 1: mcppv2_enum_4.cpp
  * Operators and enums
    * Code 1: mcppv2_enum_5.cpp
    * Code 2: mcppv2_enum_6.cpp

* How to: Use Events in C++/CLI
  * Interface events
    * Code 1: mcppv2_events2.cpp
  * Cusom accessor methods
    * Code 1: mcppv2_events6.cpp
  * Override default access on add, remove, and raise accessors
    * Code 1: mcppv2_events3.cpp
  * Multiple event handlers
    * Code 1: mcppv2_events4.cpp
  * Static events
    * Code 1: mcppv2_events7.cpp
  * Virtual events
    * Code 1: mcppv2_events5.cpp
  * Abstract events
    * Code 1: mcppv2_events10.cpp
  * Raising events that are defined in a different assembly
    * Code 1: mcppv2_events8.cpp
    * Code 2: mcppv2_events9.cpp

* How to: Define an Interface Static Constructor (C++/CLI)
  * Code 1: mcppv2_interface_class2.cpp

* How to: Declare Override Specifiers in Native Compilations (C++/CLI)
  * Code 1: sealed_native_keyword.cpp
  * Code 2: override_native_keyword.cpp
  * Code 3: abstract_native_keyword.cpp

* How to: Use Properties in C++/CLI
  * Basic Properties
    * Code 1: SimpleProperties.cpp
  * Static properties
    * Code 1: mcppv2_property_3.cpp
  * Indexed properties
    * Code 1: mcppv2_property_2.cpp
    * Code 2: call_default_indexer_through_this_pointer.cpp
    * Code 3: specify_default_indexer.cpp
    * Code 4: consume_default_indexer.cpp
  * Virtual properties
    * Code 1: mcppv2_property_4.cpp
  * Abstract and sealed properties
    * Code 1: properties_abstract_sealed.cpp
  * Multidimensional properties
    * Code 1: mcppv2_property_5.cpp
  * Overloading property accessor
    * Code 1: mcppv2_property_6.cpp

* How to: Use safe_cast in C++/CLI
  * Upcasting
    * Code 1: safe_upcast.cpp
  * Downcasting
    * Code 1: safe_downcast.cpp
  * safe_cast with user-defined conversions
    * Code 1: safe_cast_udc.cpp
  * safe_cast and boxing operations
    * Code 1: safe_cast_boxing.cpp
    * Code 2: safe_cast_boxing_2.cpp
    * Code 3: safe_cast_unboxing.cpp
    * Code 4: safe_cast_unboxing_2.cpp
  * safe_cast and generic types
    * Code 1: safe_cast_generic_types.cpp

## Native and .NET Interoperability

* Mixed (Native and Managed) Assembilies
* Using a Windows Form User Control in MFC
* Calling Native Functions from Managed Code

## Mixed (Native and Managed) Assembilies

* How to: Migrate to /cli
* How to: Compiler MFC and ATL Code By Using /clr
* Initialization of Mixed Assemblies
* Library Support for Mixed Assemblies
* Performance Considerations for Interop (C++)
* Application Domains and Visual C++
* Double Thunking (C++)
* Avoiding Exceptions on CLR Shutdown When Consuming COM Objects Built with /clr
* How to: Create a Partially Trusted Application Removing Dependency on the CRT library DLL

## Using a Windows Form User Control in MFC

* Hosting a Windows Form User Control in an MFC Dialog Box
* Hosting a Windows Form user Control as an MFC View
* Hosting a Windows Form User Control as an MFC Dialog Box

## Calling Native Functions from Managed Code

* Using Explicit PInvoke in C++ (DllImport Attribute)
* Using C++ Interop (Implicit PInvoke)
* A Closer Look at Platform Invoke
