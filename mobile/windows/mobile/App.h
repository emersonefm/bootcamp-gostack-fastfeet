#pragma once

#include "App.xaml.g.h"



namespace winrt::mobile::implementation
{
    struct App : AppT<App>
    {
        App() noexcept;
    };
} // namespace winrt::mobile::implementation


